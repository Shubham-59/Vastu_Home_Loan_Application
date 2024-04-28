import { Component, OnInit } from '@angular/core';
import { LoanApplicationFormComponent } from '../../loan/loan-application-form/loan-application-form.component';
import { LoanapplicationService } from '../../service/loanapplication.service';
import { Customer } from '../../model/customer';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-approvedloan',
  templateUrl: './approvedloan.component.html',
  styleUrl: './approvedloan.component.css'
})
export class ApprovedloanComponent implements OnInit {
  passLoanList: Customer[] = [];
  customers:Customer
  ApprovedLoan: string = "ApprovedLoan"; // Assuming "approved" is the status you want to query

  constructor(private loanService: LoanapplicationService,private router:Router) {}

  ngOnInit(): void {
    this.loanService.getAllLoanPassApplication(this.ApprovedLoan).subscribe(
      (data: Customer[]) => {
        console.log(data);
        // Assign the returned data to passLoanList if needed
        this.passLoanList = data;
      },
      (error) => {
        console.error('Error fetching approved loans:', error);
      }
    );
  }
  senctionloan(customerId:number)
  {

    this.router.navigateByUrl('/vastu_housing/CM/view_approved/'+customerId)
       
  }
}
