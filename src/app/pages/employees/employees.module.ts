import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbActionsModule, NbCardModule, NbSelectModule, NbIconModule, NbInputModule, NbTreeGridModule, NbAlertModule, NbButtonModule } from '@nebular/theme';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { GridcellNavComponent } from './gridcell-nav/gridcell-nav.component';
import { DependentsComponent } from './dependents/dependents.component';
import { PaychecksComponent } from './paychecks/paychecks.component';
import { FormsModule } from "@angular/forms";
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@NgModule({
  declarations: [EmployeesComponent, GridcellNavComponent, DependentsComponent,
    PaychecksComponent, EmployeeCardComponent],
  imports: [
    FormsModule,
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbTreeGridModule,
    NbAlertModule,
    NbSelectModule,
    NbActionsModule,
    EmployeesRoutingModule,
  ],
})
export class EmployeesModule { }
