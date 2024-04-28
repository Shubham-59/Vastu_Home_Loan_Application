import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { ViewDetailedLoanapplicationComponent } from './view-detailed-loanapplication/view-detailed-loanapplication.component';
import { LoansanctionComponent } from './loansanction/loansanction.component';

const routes: Routes = [
  { path: 'application/edit/:enquiryId', component: LoanApplicationFormComponent },
//  {
//   path: 'vastu_housing/loan/application/edit/:enquiryId',
//   component: LoanApplicationFormComponent
// 
{path:'application/:customerId', component:ViewDetailedLoanapplicationComponent},
//{path:'loansanction/:customerId', component:LoansanctionComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
