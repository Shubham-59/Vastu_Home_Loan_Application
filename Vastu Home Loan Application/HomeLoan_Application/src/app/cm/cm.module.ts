import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { ViewLoanapplicationComponent } from './view-loanapplication/view-loanapplication.component';
import { ApprovedloanComponent } from './approvedloan/approvedloan.component';
import { RejectedloanComponent } from './rejectedloan/rejectedloan.component';
import { LoansanctionComponent } from './loansanction/loansanction.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewLoanapplicationComponent,
    ApprovedloanComponent,
    RejectedloanComponent,
    LoansanctionComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule,
    ReactiveFormsModule
  ]
})
export class CmModule { }
