import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { EnquiryForm } from '../../model/enquiry-form';
import { EnquiryService } from '../../service/enquiry.service';
import { Cibil } from '../../model/cibil';

@Component({
  selector: 'app-view-forwareded-enquiry',
  templateUrl: './view-forwareded-enquiry.component.html',
  styleUrl: './view-forwareded-enquiry.component.css'
})
export class ViewForwarededEnquiryComponent implements OnInit {
constructor(private enquiryService:EnquiryService){}
enquiry:EnquiryForm[];
cibil:Cibil;
cibilChecked: boolean = false;
  ngOnInit(): void {
      
this.enquiryService.getAllForwardEnquiryByOEtoCibilCheck().subscribe(
  (data:EnquiryForm[])=>
    {
      console.log(data)
      this.enquiry=data
    }
)
  
      
  }
  cibilScoreCheck(enquiryId:number){

    
    this.enquiryService.checkCibilScore(enquiryId).subscribe(
      (data:any)=>
        {
          console.log(data)
          this.cibil=data;
          this.cibilChecked = true;//Set flag to true after receiving Cibil score
          alert("Your Cibil Score is -:  "  +this.cibil.cibilScore)
          
        }
    )
  }
  forwardToRE(e:EnquiryForm)
  {
       if(this.cibilChecked)
        {
          this.enquiryService.forwardEnquiryUpdateStatusToRE(e).subscribe();
          console.log(e.status)
          
        }
        else {
          alert('Please check your Cibil score first.')
     
  }
}
}
