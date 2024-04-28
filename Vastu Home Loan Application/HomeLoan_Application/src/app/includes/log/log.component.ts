import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UserDetailes } from '../../model/user-detailes';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit {
  constructor(private fb:FormBuilder,private route:Router,private userService:UserService){}

 user:UserDetailes
  
 loginform:FormGroup
  ngOnInit(): void {
      this.loginform=this.fb.group({
         username:[],
         password:[]
         
      })
      
  }
  loginCheck(){
           let un=this.loginform.controls['username'].value;
           let ps=this.loginform.controls['password'].value;
               this.userService.getAuthUser(un,ps).subscribe(
                (authUser:UserDetailes)=>
                {
                  console.log(authUser)
                  
                  if(authUser!=null)
                  {
                    sessionStorage.setItem("user",JSON.stringify(authUser ));
                    this.route.navigateByUrl('/vastu_housing/'+authUser.userType)
                  }
              //     this.user=authUser
              //     if(this.user.username==un && this.user.password==ps)
              //  this.route.navigateByUrl('user-layout')
                },
                (error)=>{ 
                  alert(error.error.message)
                }
                );
                
               

               
   
  }

  
}

