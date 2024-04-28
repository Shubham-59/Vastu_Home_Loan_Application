import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanapplicationService } from '../../service/loanapplication.service';
import { every } from 'rxjs';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryForm } from '../../model/enquiry-form';
import { EnquiryService } from '../../service/enquiry.service';
import { Customer } from '../../model/customer';
import { Cibil } from '../../model/cibil';

@Component({
  selector: 'app-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrl: './loan-application-form.component.css'
})
export class LoanApplicationFormComponent implements OnInit {
  enquiry:EnquiryForm
  cibil:Cibil
  
  addressProof:any
  panCard:any
  incomeTax:any
  addharCard:any
  photo:any
  signature:any
  salarySlips:any
  mortgagePropertyProof:any
  mortgagePropertyInsurance:any
  professionSalarySlips:any

  customerForm: FormGroup;

  currentStep: number = 1;
  totalSteps: number = 6;

  fileReader=new FileReader();
  address:any
  pan:any
  income:any
  addhar:any
  pic:any
  sign:any
  salary:any
  mortgagePropertyP:any
  mortgagePropertyI:any
  professionsalary:any

 

  constructor(private formBuilder: FormBuilder, private loanService:LoanapplicationService,
    private route: ActivatedRoute,private enquiryService:EnquiryService
  ) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
        customerId: [''],
        firstName: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
      //  customerAge: ['', Validators.required],
      age:[],
        customerGender: ['', Validators.required],
        email: ['', Validators.required],

        mobileNumber: ['', Validators.required],
        panCard:[],
        adharCard:[],
        cibilScore:[],
        requireTenure:[''],
        customerAdditionalMobileNumber: [''],
        customerAmountPaidForHome: ['', Validators.required],
        requestedLoanAmount: ['', Validators.required],
        educationalInfo: this.formBuilder.group({
          educationId: [''],
          educationType: ['', Validators.required]
        }),
        allPersonalDocuments: this.formBuilder.group({
          
        }),
        familyDependentInformation: this.formBuilder.group({
          dependentInfoId: [''],
          fatherName: ['', Validators.required],
          motherName: ['', Validators.required],
          spouseName: [''],
          noOfFamilyMember: ['', Validators.required],
          noOfChild: ['', Validators.required],
          maritalStatus: ['', Validators.required],
        }),
        customerAddress: this.formBuilder.group({
          customerAddressId: [''],
          permanentAddress: this.formBuilder.group({
            permanentAddressId: [''],
            areaName: ['', Validators.required],
            cityName: ['', Validators.required],
            district: ['', Validators.required],
            state: ['', Validators.required],
            pincode: ['', Validators.required],
            houseNumber: ['', Validators.required],
            streetName: ['', Validators.required]
          }),
          localAddress: this.formBuilder.group({
            localAddressId: [''],
            areaName: ['', Validators.required],
            cityName: ['', Validators.required],
            district: ['', Validators.required],
            state: ['', Validators.required],
            pincode: ['', Validators.required],
            houseNumber: ['', Validators.required],
            streetName: ['', Validators.required]
          })
        }),
        mortagedetails: this.formBuilder.group({
          mortgageId: [''],
          mortgagePropertyValue: ['', Validators.required],
          mortgagePropertyType: ['', Validators.required],
          mortgageLoanOnProperty: ['', Validators.required],
        }),
        profession: this.formBuilder.group({
          professionId: [''],
          professionType: ['', Validators.required],
          professionSalary: ['', Validators.required],
          professionSalaryType: ['', Validators.required],
          professionWorkingPeriod: ['', Validators.required],
          professionDesignation: ['', Validators.required],
        }),
        accountDetails: this.formBuilder.group({
          accountId: [''],
          accountType: ['', Validators.required],
          accountBalance: ['', Validators.required],
          accountHolderName: ['', Validators.required],
          accountStatus: ['', Validators.required],
          accountNumber: ['', Validators.required]
        }),
        gaurantorDetails: this.formBuilder.group({
          guarantorId: [''],
          guarantorName: ['', Validators.required],
          guarantorDateOfBirth: ['', Validators.required],
          guarantorRelationshipWithCustomer: ['', Validators.required],
          guarantorMobileNumber: ['', Validators.required],
          guarantorAdharCardNo: ['', Validators.required],
          guarantorMortgageDetails: [''],
          guarantorJobDetails: [''],
          guarantorLocalAddress: [''],
          guarantorPermanentAddress: ['']
        })
      })
      this.getEnquiryData()
  }

  nextStep(): void {
    this.currentStep++;
  }
  prevStep(): void {
    this.currentStep--;
  }

  onSelectAddressProof(event) {
    this.addressProof=event.target.files[0];
    this.fileReader.onload=file=>this.address=this.fileReader.result;
    this.fileReader.readAsDataURL(this.addressProof);
  }
  onSelectPanCard(event) {
    this.panCard=event.target.files[0];
    this.fileReader.onload=file=>this.pan=this.fileReader.result;
    this.fileReader.readAsDataURL(this.panCard);
  }
  onSelectIncomeTax(event) {
    this.incomeTax=event.target.files[0];
    this.fileReader.onload=file=>this.income=this.fileReader.result;
    this.fileReader.readAsDataURL(this.incomeTax);
  }
  onSelectAddharCard(event) {
    this.addharCard=event.target.files[0];
    this.fileReader.onload=file=>this.addhar=this.fileReader.result;
    this.fileReader.readAsDataURL(this.addharCard);
  }
  onSelectPhoto(event) {
    this.photo=event.target.files[0];
    this.fileReader.onload=file=>this.pic=this.fileReader.result;
    this.fileReader.readAsDataURL(this.photo);
  }
  onSelectSignature(event) {
    this.signature=event.target.files[0];
    this.fileReader.onload=file=>this.sign=this.fileReader.result;
    this.fileReader.readAsDataURL(this.signature);
  }
  onSelectSalarySlips(event) {
    this.salarySlips=event.target.files[0];
    this.fileReader.onload=file=>this.salary=this.fileReader.result;
    this.fileReader.readAsDataURL(this.salarySlips);
  }
  onSelectMortgagePropertyProof(event) {
    this.mortgagePropertyProof=event.target.files[0];
    this.fileReader.onload=file=>this.mortgagePropertyP=this.fileReader.result;
    this.fileReader.readAsDataURL(this.mortgagePropertyProof);
  }
  onSelectMortgagePropertyInsurance(event) {
    this.mortgagePropertyInsurance=event.target.files[0];
    this.fileReader.onload=file=>this.mortgagePropertyI=this.fileReader.result;
    this.fileReader.readAsDataURL(this.mortgagePropertyInsurance);
  }
  onSelectProfessionsalaryslips(event) {
    this.professionSalarySlips=event.target.files[0];
    this.fileReader.onload=file=>this.professionsalary=this.fileReader.result;
    this.fileReader.readAsDataURL(this.professionSalarySlips);
  }
  submitForm(): void {
    console.log(this.customerForm.value)
   // if (this.customerForm.valid) {
  
      const data: FormData = new FormData();
      const userJson: string = JSON.stringify(this.customerForm.value);
      data.append("customerData", userJson);
      data.append("addproof", this.addressProof);
      data.append("pan", this.panCard);
      data.append("inctax", this.incomeTax);
      data.append("adhar", this.addharCard);
      data.append("pic", this.photo);
      data.append("sign", this.signature);
      data.append("salaryslip", this.salarySlips);
      data.append("mortPropertyproof", this.mortgagePropertyProof);
      data.append("mortgageinsuance", this.mortgagePropertyInsurance);
      data.append("salaryslips", this.professionSalarySlips);
  
      this.loanService.postAllLoanApplicationForm(data).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          alert('Form submitted successfully');
          
        },
        error => {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again.');
        }
      );

      alert("form submitted");
    //  window.location.reload();
    // } else {
    //   this.markFormGroupTouched(this.customerForm);
    //   alert("please fill information");
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  getEnquiryData():void
  {
    
    this.route.paramMap.subscribe(
      params => {
        console.log('All route params:', params); // Log all route params
    let enquiry_Id: number = +params.get('enquiryId');
    console.log('Enquiry ID:', enquiry_Id); 
        if (enquiry_Id != null) {
          this.enquiryService.getEnquiryById(enquiry_Id).subscribe(
            (data: EnquiryForm) => {
              if (data) {
                this.enquiry = data;
                console.log('Fetched enquiry:', this.enquiry);
                this.customerForm.patchValue(this.enquiry);
                this.customerForm.controls['cibilScore'].setValue(this.enquiry.cibil.cibilScore);
              } else {
                console.log('Enquiry data is null');
              }
            },
            error => {
              console.error("Error fetching enquiry:", error);
            }
          );
        } else {
          console.log('enquiry_Id is null');
        }
      },
      error => {
        console.error("Error getting parameter:", error);
      }
    );
}}