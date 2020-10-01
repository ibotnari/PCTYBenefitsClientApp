import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  template: `
<nb-actions size="medium" fullWidth>
  <nb-action icon="people-outline" [routerLink]="['/pages/employees/dependents/', id]"></nb-action>
  <nb-action icon="gift-outline" [routerLink]="['/pages/employees/paychecks/', id]"></nb-action>
</nb-actions>
`,
})
export class GridcellNavComponent implements ViewCell, OnInit {
  @Input() value: any;
  @Input() rowData: any;
  public linkText: string;
  public id: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.linkText = "";
    this.id = this.rowData.id;
  }
}
