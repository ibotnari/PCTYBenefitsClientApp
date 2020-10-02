import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from "ng2-smart-table";
import { Client, Dependent } from "@api/api";
import { DatePipe } from "@angular/common";
import { EmployeeBaseComponent } from "../employee-base.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-paychecks',
  templateUrl: './paychecks.component.html',
  styleUrls: ['./paychecks.component.scss'],
})
export class PaychecksComponent extends EmployeeBaseComponent implements OnInit, OnDestroy {


  source = new LocalDataSource();
  availableYears = [];

  _year = 0;

  set year(val: number) {
    if (val !== this._year) {
      this._year = val;
      this.loadPaychecks();
    }
  }

  get year(): number {
    return this._year;
  }

  constructor(service: Client, route: ActivatedRoute) {
    super(service, route);
    this.onIdChange.subscribe({
      next: (_) => {
        this._year = 2020;
        this.loadPaychecks();
      },
    });
  }


  ngOnInit() {
    super.ngOnInit();
  }

  loadPaychecks() {
    this.service.getEmployeePaychecks(this.id, this.year).subscribe(data => {
      this.source.load(data);
      this.loadYears();
    }, (err) => {
      this.handleError(err);
    });
  }

  loadYears() {
    this.service.getEmployeePaycheckYears(this.id).subscribe(data => {
      this.availableYears = data;
    }, (err) => {
      this.handleError(err);
    });
  }

  generatePaychecks(event) {
    this.service.processPaychecks(this.id, this.year).subscribe(_ => {
        this.loadPaychecks();
      },
      (err) => {
        this.handleError(err);
      });
  }
  deletePaychecks(event) {
    this.service.deletePaychecks(this.id, this.year).subscribe(_ => {
      this.loadPaychecks();
    },
      (err) => {
        this.handleError(err);
      });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }


  settings = {
    hideSubHeader: false,
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {

      index: {
        title: "#",
        type: "number",
        editable: false,
        addable: false,
        width: "5%",
        editor: {
          type: 'custom',
        },
        valuePrepareFunction: (v: any, row) => {
          return row.year + '/' + row.index;
        },
      },
      grossAmount: {
        title: "Gross",
        type: "number",
        editable: false,
        addable: false,
        width: "5%",
        editor: {
          type: 'custom',
        },
      },
      netAmount: {
        title: "Net",
        type: "number",
        editable: false,
        addable: false,
        width: "5%",
        editor: {
          type: 'custom',
        },
      },
      benefitsCost: {
        title: "Benefits Cost",
        type: "number",
        editable: false,
        addable: false,
        width: "5%",
        editor: {
          type: 'custom',
        },
      },
    },
  };
}
