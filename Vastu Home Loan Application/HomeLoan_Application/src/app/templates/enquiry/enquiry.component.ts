import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {
  enquiryForm: FormGroup;
  enquiry: any;
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
      emailId: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      panCard: ['', Validators.required],
      adharCard: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
      employmentStatus: ['', Validators.required],
      yearsEmployed: ['', Validators.required],
      creditScore: ['', Validators.required],
      loanPurpose: ['', Validators.required],
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
        
          this.currentStep = 1; // Reset to first step
          this.currentStep=2;
          
          this.enquiryForm.reset();
          window.location.reload();
          alert('Enquiry submitted');
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

