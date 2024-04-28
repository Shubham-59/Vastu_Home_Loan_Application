import { Component, OnInit } from '@angular/core';
import { LoanapplicationService } from '../../service/loanapplication.service';
import { Customer } from '../../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-loanapplication',
  templateUrl: './view-loanapplication.component.html',
  styleUrl: './view-loanapplication.component.css'
})
export class ViewLoanapplicationComponent implements OnInit{
constructor(private loanService:LoanapplicationService, private route:Router){}
loandata: Customer[] = [];
  ngOnInit(): void {
      this.loanService.getAllOanApplication().subscribe(
        (data:Customer[])=>{
          this.loandata=data
console.log(data)

        }
      )
  }
  onView(customerId:number):void {


    alert("View All Information")
    this.route.navigateByUrl('/vastu_housing/loan/application/${customerId}');
  }
  approvedLoan(customer:Customer)
  {
      this.loanService.updateStatusApprovedLoan(customer).subscribe()
      alert('Loan Pass -Customer Accepeted the Loan')
  }
  rejectedLoan(customer:Customer)
  {
     this.loanService.updateStatusRejectedLoan(customer).subscribe()
     alert("Loan Status-Customer Rejected the Loan")
  }
}
