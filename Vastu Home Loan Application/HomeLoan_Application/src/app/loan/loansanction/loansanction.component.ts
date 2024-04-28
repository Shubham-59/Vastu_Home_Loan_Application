import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { LoanapplicationService } from '../../service/loanapplication.service';

@Component({
  selector: 'app-loansanction',
  templateUrl: './loansanction.component.html',
  styleUrl: './loansanction.component.css'
})
export class LoansanctionComponent implements OnInit {
customers:Customer
constructor(private loanService:LoanapplicationService){}
  ngOnInit(): void {
        

  }
  
}

