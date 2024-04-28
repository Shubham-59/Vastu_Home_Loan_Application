import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../service/enquiry.service';
import { EnquiryForm } from '../../model/enquiry-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-status',
  templateUrl: './enquiry-status.component.html',
  styleUrl: './enquiry-status.component.css'
})
export class EnquiryStatusComponent implements OnInit{
constructor(private enquiryService:EnquiryService,private route:Router){}
enquiry:EnquiryForm[]

ngOnInit(): void {
     this.enquiryService.getAllEnquiry().subscribe(
      (data:EnquiryForm[])=>
        {
         // console.log(data)
          this.enquiry=data
          console.log(this.enquiry)
        }
     )


}
handleLoanApplication(enquiry: EnquiryForm): void {
//  this.route.navigateByUrl()
if (enquiry.status === 'Approved') {
  console.log(enquiry)
  let json_user = JSON.stringify(enquiry.enquiryId);
    console.log('Navigating with enquiryId:', enquiry.enquiryId); // Log the enquiryId
    alert('This customer is eligible for the loan application form.');
    this.route.navigateByUrl(`/vastu_housing/loan/application/edit/${enquiry.enquiryId}`);
  //  this.route.navigateByUrl('/vastu_housing/loan/application/edit/' + json_user);
// this.route.navigateByUrl(`/vastu_housing/loan/application/${enquiry.enquiryId}`);
} else {
  // Optionally, you can show a different message if the customer is not eligible
  alert('This customer is not eligible for the loan application form.');
}
  console.log('Handling loan application for:', enquiry);
  
}
}
