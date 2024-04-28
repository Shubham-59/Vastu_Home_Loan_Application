import { Component, OnInit } from '@angular/core';
import { LoanapplicationService } from '../../service/loanapplication.service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-rejectedloan',
  templateUrl: './rejectedloan.component.html',
  styleUrl: './rejectedloan.component.css'
})
export class RejectedloanComponent implements OnInit{
  constructor(private loanService:LoanapplicationService){}
  loanStatuslist:Customer[]=[]
  RejectedLoan: string = "RejectedLoan"; 
ngOnInit(): void {
    this.loanService.getAllLoanPassApplication(this.RejectedLoan).subscribe(
      (data:Customer[])=>
        {
          this.loanStatuslist=data
        }
    )
}
}
