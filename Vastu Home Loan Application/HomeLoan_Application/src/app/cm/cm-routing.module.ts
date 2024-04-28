import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoanapplicationComponent } from './view-loanapplication/view-loanapplication.component';
import { ApprovedloanComponent } from './approvedloan/approvedloan.component';
import { RejectedloanComponent } from './rejectedloan/rejectedloan.component';
import { LoansanctionComponent } from './loansanction/loansanction.component';
import { ViewDetailedLoanapplicationComponent } from '../loan/view-detailed-loanapplication/view-detailed-loanapplication.component';

const routes: Routes = [
  {path:'view_loan_application',component:ViewLoanapplicationComponent},
  {
    path:'view_approved',component:ApprovedloanComponent
  },
  {
    path:'view_rejected',component:RejectedloanComponent
  },
  
  {path:'view_approved/:cId',component:LoansanctionComponent},
  
    {path:'view_all/:cId',component:ViewDetailedLoanapplicationComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
