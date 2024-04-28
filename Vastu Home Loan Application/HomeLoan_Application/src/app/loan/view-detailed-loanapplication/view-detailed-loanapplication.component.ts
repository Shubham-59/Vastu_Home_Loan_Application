import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-view-detailed-loanapplication',
  templateUrl: './view-detailed-loanapplication.component.html',
  styleUrl: './view-detailed-loanapplication.component.css'
})
export class ViewDetailedLoanapplicationComponent implements OnInit {
  customers: Customer[] = [];
  
  constructor() {
    this.customers.push(new Customer());
  }

  getCustomerById(customerId: number): Customer | undefined {
    return this.customers.find(customer => customer.customerId === customerId);
  }
  ngOnInit(): void {
      
  }
}
