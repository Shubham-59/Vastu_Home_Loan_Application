import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path:'add_employee',component:AddEmployeeComponent},
  {path:'view_employee',component:ViewEmployeeComponent},
  {path:'statistics',component:StatisticsComponent},
  {path:'edit/:userId',component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
