import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { EnquiryForm } from '../../model/enquiry-form';




@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrl: './add-enquiry.component.css'
})
export class AddEnquiryComponent implements OnInit {

  enquiryForm: FormGroup;
  enquiry: EnquiryForm;
  currentStep: number = 1;
  
  constructor(private fb: FormBuilder, private userService:UserService,
                private activeRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.enquiryForm = this.fb.group({ 
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      panCard: ['', Validators.required],
      adharCard: ['', Validators.required],
      requestedLoanAmount: ['', Validators.required]
    });
  }

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitEnquiry() {
    // if (this.enquiryForm.valid) {
    //   this.enquiry = Object.assign({}, this.enquiryForm.value);
    //   console.log(this.enquiry);
    //   this.formService.saveEnquiry(this.enquiry).subscribe();
    //   alert('enquiry submitted')
    // }
    if (this.enquiryForm.valid) {
      this.enquiry = Object.assign({}, this.enquiryForm.value);
      console.log(this.enquiry);
       this.userService.saveUserEnquiryDetailes(this.enquiry).subscribe(() => 
        response => {
          console.log(response); // Log the response for debugging
          alert('Enquiry submitted');
          this.currentStep = 1; // Reset to first step
          this.currentStep=2;
          
          this.enquiryForm.reset();
          window.location.reload();
        
       });
      
    } else {
      alert('Please fill all required fields.');
    }
    
  }
  invalidField(field: string) {
    const control = this.enquiryForm.get(field);
    return control && control.invalid && (control.dirty || control.touched);
  }

}
