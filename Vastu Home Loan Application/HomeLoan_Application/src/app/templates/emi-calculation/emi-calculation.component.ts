import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculation',
  templateUrl: './emi-calculation.component.html',
  styleUrl: './emi-calculation.component.css'
})
export class EmiCalculationComponent {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  emi: number;

  calculateEMI() {
    const principal = this.loanAmount;
    const rateOfInterest = (this.interestRate / 100) / 12;
    const numberOfPayments = this.loanTenure * 12;

    const emi = principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments) / (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);
    this.emi = emi;
  }

}
