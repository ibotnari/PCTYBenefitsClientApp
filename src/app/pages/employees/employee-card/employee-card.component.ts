import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '@api/api';
import { EmployeePinService } from './../../services/employee-pinner.service';

@Component({
  selector: 'ngx-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {

  private _employee: Employee = null;
  private _pinned: boolean;
  set pinned(value: boolean) {
    this._pinned = value;
    if (value) {
      this.pinEmployee();
    } else {
      this.unpinEmployee();
    }
  }
  get pinned(): boolean {
    return this._pinned;
  }
  @Input() set employee(value: Employee) {
    this._employee = value;
    this.pinned = this.employeePinService.isPinned(value);
  }
  get employee(): Employee {
    return this._employee;
  }
  constructor(private employeePinService: EmployeePinService) {
  }

  ngOnInit(): void {
  }
  pinEmployee() {
    this.employeePinService.pinEmployee(this.employee);
  }
  unpinEmployee() {
    this.employeePinService.unpinEmployee(this.employee);
  }
}
