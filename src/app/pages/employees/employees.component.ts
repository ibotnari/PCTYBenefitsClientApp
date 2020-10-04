import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Client, Employee } from "../../../api/api";
import { DatePipe } from "@angular/common";
import { OnInit } from "@angular/core";
import { GridcellNavComponent } from './gridcell-nav/gridcell-nav.component';
import { BaseComponent } from "../../base.component";


@Component({
  selector: "ngx-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
  providers: [DatePipe],
})
export class EmployeesComponent extends BaseComponent implements OnInit {

  source = new LocalDataSource();

  constructor(private service: Client) {
    super();
  }

  ngOnInit() {
    this.service.getEmployees().subscribe(data => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    this.resetErrors();
    this.debugdata = event.data;
    if (window.confirm("Are you sure you want to delete?")) {
      this.service.deleteEmployee(event.data.id).subscribe(res => {
          event.confirm.resolve();
        },
        (err) => {
          this.handleError(err);
          event.confirm.reject();
        });
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    this.resetErrors();
    const employee = Employee.fromJS(event.newData);
    employee.id = 0;
    this.debugdata = employee;
    this.service.postEmployee(employee).subscribe(res => {
        event.confirm.resolve(res);
      },
      (err) => {
        this.handleError(err);
        event.confirm.reject();
      });
  }

  onEditConfirm(event): void {
    this.resetErrors();
    this.debugdata = event.newData;
    this.service.putEmployee(event.data.id, event.newData).subscribe(res => {
        event.confirm.resolve();
      },
      (err) => {
        this.handleError(err);
        event.confirm.reject();
      });
  }

  settings = {
    hideSubHeader: false,
    add: {
      addButtonContent: '<i class="ion-plus"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
        editable: false,
        addable: false,
        width: "5%",
      },
      firstName: {
        title: "First Name",
        type: "string",
      },
      lastName: {
        title: "Last Name",
        type: "string",
      },
      annualGrossPay: {
        title: "Annual Gross Pay",
        type: "number",
      },
      startDate: {
        title: "Start Date",
        type: "date",
        valuePrepareFunction: (dt: any) => {
          return new DatePipe("en-US").transform(dt, "yyyy/M/d");
        },
        width: "10%",
      },
      endDate: {
        title: "End Date",
        type: "date",
        valuePrepareFunction: (dt: any) => {
          return new DatePipe("en-US").transform(dt, "yyyy/M/d");
        },
        width: "10%",
      },
      customActions:
      {
        title: '#',
        type: 'custom',
        renderComponent: GridcellNavComponent,
        filter: false,
        editable: false,
        addable: false,
      },
    },
  };

}
