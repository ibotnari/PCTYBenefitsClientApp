import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesComponent } from "./employees.component";
import { DependentsComponent } from "./dependents/dependents.component";
import { PaychecksComponent } from "./paychecks/paychecks.component";


const routes: Routes = [
  {
    path: "",
    component: EmployeesComponent,
  },
  {
    path: "employee/:id",
    component: PaychecksComponent,
  },
  {
    path: "dependents/:id",
    component: DependentsComponent,
  },
  {
    path: "paychecks/:id",
    component: PaychecksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {
}
