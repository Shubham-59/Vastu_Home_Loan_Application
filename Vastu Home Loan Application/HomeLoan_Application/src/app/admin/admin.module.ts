import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
