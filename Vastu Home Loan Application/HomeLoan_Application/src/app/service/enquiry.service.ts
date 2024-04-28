import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnquiryForm } from '../model/enquiry-form';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }

  updateTheStatusForwardToOE(enquiry: EnquiryForm) {
    const enquiryId = enquiry.enquiryId;
    return this.http.put(`http://localhost:8081/enquiry/forward_To_OE/${enquiryId}`, enquiry);
  }
  getAllEnquiry()
  {
    return this.http.get('http://localhost:8081/enquiry/getAllEnquiryData')
  }
  getEnquiryById(enquiryId: number) {
    return this.http.get('http://localhost:8081/enquiry/getEnquiryById/' + enquiryId);
  }
  
  getAllForwardEnquiryByOEtoCibilCheck()
  {

    return this.http.get('http://localhost:8081/getAllEnquiryByStatus/Forwarded')
  }
   checkCibilScore(enquiryId:number)
   {
    return this.http.get('http://localhost:8081/checkCibilById/'+enquiryId)
   }

   forwardEnquiryUpdateStatusToRE(e:EnquiryForm)
   {const enquiryId = e.enquiryId;
    return this.http.put(`http://localhost:8081/ForwardedEnquiryByIdToRE/${enquiryId}`,e)
   }
}
