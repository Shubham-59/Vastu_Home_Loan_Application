import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDetailes } from '../../model/user-detailes';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private activeRout:ActivatedRoute){}
  userRegistrationForm:FormGroup
  
  profileImage:any

  //to display profile image

  fileReader=new FileReader()
  profile:any;
  flag:boolean=false
  
  user:UserDetailes
  ngOnInit(): void {
      this.userRegistrationForm=this.fb.group({

        userId:[],
    employeeFullName:[],
    employeeEmail:[],
    username:[],
    password:[],
    userType:[]
      });

     this.getEditData()
  }
  onSubmitUserDetailes(){
if(this.flag){
  alert('product will update')
  const data:FormData=new FormData();
  let user_Json:string=JSON.stringify(this.userRegistrationForm.value);
  data.append("text",user_Json)
  data.append('prof',this.profileImage)
  
  this.userService.updateEmployeeDetailes(data).subscribe()
  
  // let userDetailes:UserDetailes=this.userRegistrationForm.value
  // userDetailes.profileImage=this,this.profileImage
  // this.userService.updateEmployeeDetailes(userDetailes).subscribe()
  window.location.reload();
  

   
}
else{

  const data:FormData=new FormData();
  let user_Json:string=JSON.stringify(this.userRegistrationForm.value);
  data.append("text",user_Json)
  data.append('prof',this.profileImage)
 
  this.userService.saveEmployeeDerailes(data).subscribe()
  // console.log(this.userRegistrationForm.value)
  alert("data Submit")
  this.userRegistrationForm.reset()
  window.location.reload();
  

}
  
  }
  onSelectProfile(event:any){
    console.log(event.target.files[0])
    this.profileImage=event.target.files[0];
    this.fileReader.onload=file=>this.profile=this.fileReader.result;
    this.fileReader.readAsDataURL(this.profileImage)
  }
  getEditData()
  {
     this.activeRout.paramMap.subscribe(
      param=>{
        let user_id: number = +param.get('userId');
        if (user_id != null) {
          this.userService.getEmployeeById(user_id).subscribe(
            (data: UserDetailes) => {
              this.user = data;
              console.log(this.user)
              this.profileImage = this.user.profileImage;
              
              this.userRegistrationForm.patchValue(this.user);
              this.flag = true;
            }
          
          )
        
        }
      }
     )
  }
}
