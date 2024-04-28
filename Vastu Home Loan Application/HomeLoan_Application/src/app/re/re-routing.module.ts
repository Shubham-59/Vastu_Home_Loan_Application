import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEmployeeComponent } from '../admin/view-employee/view-employee.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewForwarededEnquiryComponent } from '../oe/view-forwareded-enquiry/view-forwareded-enquiry.component';
import { EnquiryStatusComponent } from './enquiry-status/enquiry-status.component';
import { LoanApplicationFormComponent } from '../loan/loan-application-form/loan-application-form.component';


const routes: Routes = [
  {
    path:'add_enquiry', component:AddEnquiryComponent
  },
  {
    path:'view_enquiry',component:ViewEnquiryComponent
  },
  {
    path: 'vastu_housing/loan/application/edit/:enquiryId', // Include the path prefix in the route
    component: LoanApplicationFormComponent
  },
  {
    path:'enquiry_status',component:EnquiryStatusComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
