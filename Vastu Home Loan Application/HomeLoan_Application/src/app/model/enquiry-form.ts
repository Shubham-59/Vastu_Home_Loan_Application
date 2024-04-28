import { Cibil } from "./cibil";

export class EnquiryForm {
    enquiryId: number;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    pincode: number;
    mobileNumber: number;
    email: string;
    dateOfBirth: Date;
    panCard: string;
    adharCard: number;
    requestedLoanAmount: number;
    status:any;
    cibil:Cibil;
}
