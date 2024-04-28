import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { LoanapplicationService } from '../../service/loanapplication.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loansanction',
  templateUrl: './loansanction.component.html',
  styleUrl: './loansanction.component.css'
})
export class LoansanctionComponent implements OnInit {
  customers: Customer;
  customerForm: FormGroup;

  constructor(
    private loanService: LoanapplicationService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerId: [''],
      firstName: [''],
      requestedLoanAmount: [''],
      requireTenure: [''],
      cibilScore: [''],
      professionSalary: [''],
      approvedLoanAmount: [''],
      interestRate: [''],
      approvedTenure: ['']
    });

    this.route.paramMap.subscribe(params => {
      const customerId = +params.get('cId'); // Assuming 'customerId' is the route parameter name
      if (customerId) {
        this.fetchCustomer(customerId);
      }
    });
  }

  fetchCustomer(customerId: number): void {
    this.loanService.getApprovedLoanById(customerId).subscribe(
      (data: Customer) => {
        this.customers = data;
        alert("In Loan Sanction ")
        this.populateForm(); // Update form fields with fetched data
      },
      (error) => {
        console.error('Error fetching approved loan details:', error);
      }
    );
  }

  populateForm(): void {
    if (this.customers) {
      this.customerForm.patchValue({
        customerId: this.customers.customerId,
        firstName: this.customers.firstName,
        requestedLoanAmount: this.customers.requestedLoanAmount,
        requireTenure: this.customers.requireTenure,
        cibilScore: this.customers.cibilScore,
        professionSalary: this.customers.profession?.professionSalary,
        approvedLoanAmount: this.customers.requestedLoanAmount,
        approvedTenure: this.customers.requireTenure
      });
    }
  }}