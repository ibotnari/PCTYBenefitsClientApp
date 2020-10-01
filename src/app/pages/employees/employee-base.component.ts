import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from "../../base.component";
import { Employee, Client } from "@api/api";

@Component({
  selector: "ngx-employee-base",
  template: "",
})
export class EmployeeBaseComponent extends BaseComponent implements OnInit, OnDestroy {
  private _id = 0;
  @Output()
  onIdChange: EventEmitter<number> = new EventEmitter<number>();
  set id(val: number) {
    if (val !== this._id) {
      this._id = val;
      this.onIdChange.emit(val);
    }
  }
  get id(): number {
    return this._id;
  }
  employee: Employee = null;
  private sub: any;
  constructor(protected service: Client, protected route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.onIdChange.subscribe({
      next: (_) => {
        this.loadEmployee();
      },
    });
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }
  loadEmployee() {
    this.service.getEmployee(this.id).subscribe(data => {
      this.employee = data;
    }, (err) => {
      this.handleError(err);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
