import { AccountDetails } from "./account-details";
import { Cibil } from "./cibil";

import { CustomerAddress } from "./customer-address";
import { AllPersonalDocuments } from "./all-personal-documents";
import { EducationalInfo } from "./educational-info";
import { GaurantorDetails } from "./GaurantorDetails";
import { MortageDetails } from "./mortage-details";
import { FamilyDependentInformation } from "./family-dependent-information";
import { Profession } from "./profession";

export class Customer 
{
        customerId:number;
	//	enquiryId:number
	  //  customerName:string;
	  firstName:string;
	  dateOfBirth:Date;
	  //  customerAge:number;
	  age:number;
	  status:any
	    customerGender:string;
	    email:string;
	    mobileNumber:string;
		panCard:number;
		adharCard:number;
		cibilScore: number;
	    customerAdditionalMobileNumber:string;
	    customerAmountPaidForHome:number;
	    requestedLoanAmount:number;
		requireTenure:number;
	    educationalInfo:EducationalInfo;
	    allPersonalDocuments:AllPersonalDocuments;
	    familyDependentInformation:FamilyDependentInformation;
	    customerAddress:CustomerAddress;
	    mortgagedetails:MortageDetails;
        profession:Profession;
	    //currentLoanDetails:CurrentLoanDetails;
	    accountDetails:AccountDetails;
	    guarantorDetails:GaurantorDetails;
	    //this feild not take into application form
	    // loanDisbursement:boolean;
	    // ledger:string;
	    // sanctionLetter:string;
	    // customerVerification:boolean;
		
}
