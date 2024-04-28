import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnquiryStatusComponent } from './enquiry-status/enquiry-status.component';
import { LoanModule } from '../loan/loan.module';
import { LoanApplicationFormComponent } from '../loan/loan-application-form/loan-application-form.component';

@NgModule({
  declarations: [
    AddEnquiryComponent,
    ViewEnquiryComponent,
    EnquiryStatusComponent,

  ],
  imports: [
    CommonModule,
    ReRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
MatPaginatorModule,
MatSortModule,
MatTableModule,
MatInputModule,
MatFormFieldModule,
  ]
})
export class ReModule { }
