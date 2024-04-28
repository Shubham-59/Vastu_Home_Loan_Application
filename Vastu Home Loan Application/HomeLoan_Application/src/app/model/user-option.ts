export class UserOption {

    public static option:Array<any>=[
        //Indiex 0
        {
             ADMIN:[
                {
                    lable:'Add Employee', link:'add_employee'
                },
                {
                    lable:'view-employee',link:'view_employee'
                },
                {
                    lable:'Statistics', link:'statistics'
                }
  
                ],
                RE:[
                    {
                        lable:'Add Enquiry',link:'add_enquiry'
                    },
                    {
                        lable:'View Enquiry', link:'view_enquiry'
                    },
                    {
                        lable:'Enquiry Status',link:'enquiry_status'
                    }
                ],
                OE:[

                    {
                        lable:'view Forwareded Enquiry',link:'view_forwarededenquiry'
                    }
                ],
                CM:[

                    {
                       
                      lable:'View loan application',link:'view_loan_application'
                    },
                    {
                       
                        lable:'View Approved Application',link:'view_approved'
                      },
                      {
                       
                        lable:'View Rejected Application',link:'view_rejected'
                      }
                ]
    
}
    ]
} 
