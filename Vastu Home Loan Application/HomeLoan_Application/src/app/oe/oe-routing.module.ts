import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewForwarededEnquiryComponent } from './view-forwareded-enquiry/view-forwareded-enquiry.component';

const routes: Routes = [
  {path:'view_forwarededenquiry', component:ViewForwarededEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
