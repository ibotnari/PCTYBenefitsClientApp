import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ng2SmartTableModule, LocalDataSource } from "ng2-smart-table";
import { Client, Dependent } from "../../../../api/api";
import { DatePipe } from "@angular/common";
import { EmployeeBaseComponent } from "../employee-base.component";

import {
  NbToastrService,
} from "@nebular/theme";

@Component({
  selector: 'ngx-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss'],
})
export class DependentsComponent extends EmployeeBaseComponent implements OnInit, OnDestroy {

  dependentTypes = [
    { title: 'Spouse', value: '0' },
    { title: 'Child', value: '1' },
  ];

  source = new LocalDataSource();

  constructor(service: Client, route: ActivatedRoute) {
    super(service, route);
    this.service = service;
    this.onIdChange.subscribe({
        next: (_) => {
          this.loadDependents();
        },
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }
  loadDependents() {
    this.service.getEmployeeDependents(this.id).subscribe(data => {
      this.source.load(data);
    });
  }
  onDeleteConfirm(event): void {
    this.resetErrors();
    if (window.confirm("Are you sure you want to delete?")) {
      this.service.deleteDependent(event.data.id).subscribe(res => {
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
    const d = Dependent.fromJS(event.newData);
    d.id = 0;
    d.employeeId = this.id;
    this.service.postDependent(d).subscribe(res => {
      event.confirm.resolve(res);
    },
      (err) => {
        this.handleError(err);
        event.confirm.reject();
      });
  }

  onEditConfirm(event): void {
    this.resetErrors();
    this.service.putDependent(event.data.id, event.newData).subscribe(res => {
      event.confirm.resolve();
    },
      (err) => {
        this.handleError(err);
        event.confirm.reject();
      });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
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
        editor: {
          type: 'custom',
        },
      },
      firstName: {
        title: "First Name",
        type: "string",
      },
      lastName: {
        title: "Last Name",
        type: "string",
      },
      dependentRelationshipToEmployee: {
        title: "Relationship",
        type: "list",
        valuePrepareFunction: (cell, row, test) => {
          const t = test.column.dataSet.columns[3].settings.editor.config.list.find(x => x.value == cell);
          if (t)
            return t.title;
        },
        editor: {
          type: 'list',
          config: {
            selectText: 'Select one',
            list: this.dependentTypes,
          },
        },
      },
    },
  };

}
