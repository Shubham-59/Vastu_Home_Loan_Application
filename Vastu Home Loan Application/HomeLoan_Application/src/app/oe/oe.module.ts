import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { ViewForwarededEnquiryComponent } from './view-forwareded-enquiry/view-forwareded-enquiry.component';


@NgModule({
  declarations: [
    ViewForwarededEnquiryComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
