import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class LoanapplicationService {

  constructor(private http:HttpClient) { }

  postAllLoanApplicationForm(customer: FormData) {
    return this.http.post('http://localhost:8083/All_Form_Data',customer);  }

    getAllOanApplication()
    {
      return this,this.http.get("http://localhost:8083/getAllLoanApplicationData")
    }
    updateStatusApprovedLoan(customer: Customer) {
      const cId = customer.customerId;
      return this.http.put(`http://localhost:8083/approvedLoan/${cId}`, customer);
    }
    updateStatusRejectedLoan(customer:Customer)
    {const cid=customer.customerId
      return this.http.put(`http://localhost:8083/rejectedLoan/${cid}`, customer);

    }
    getAllLoanPassApplication(status: string) {
      return this.http.get(`http://localhost:8083/getAllLoanApproved/${status}`);
    }
    getApprovedLoanById(customerId: number) {
      
      return this.http.get('http://localhost:8083/approvedLoanById/' + customerId);
    }
    
}
