import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReModule } from '../re/re.module';
import { ViewDetailedLoanapplicationComponent } from './view-detailed-loanapplication/view-detailed-loanapplication.component';
import { LoansanctionComponent } from './loansanction/loansanction.component';


@NgModule({
  declarations: [
    LoanApplicationFormComponent,
    ViewDetailedLoanapplicationComponent,
    LoansanctionComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ReactiveFormsModule,ReModule
  ]
})
export class LoanModule { }
