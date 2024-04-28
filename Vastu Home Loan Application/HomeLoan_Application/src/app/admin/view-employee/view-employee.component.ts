import { Component, OnInit } from '@angular/core';
import { UserDetailes } from '../../model/user-detailes';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{
constructor(private userService:UserService,
  private route:Router){}

  users:UserDetailes[]


  ngOnInit(): void {

    this.userService.getAllEmployeeDetailes().subscribe(
      (data:UserDetailes[])=>
      {
        this.users=data
      }
    )
      
  }
  onUpdateEmployeeDetailes(u:UserDetailes)
  {
    let json_user=JSON.stringify(u.userId);
 // let json_user: string = encodeURIComponent(JSON.stringify({u.userId}));      //if in our from we use image or pdf then use this 
    this.route.navigateByUrl('/vastu_housing/ADMIN/edit/' +json_user);
  }
  deleteEmployee(userId:number){

    this.userService.deleteEmployee(userId).subscribe()
    alert("Detele Employee Succesfully.....")
    window.location.reload();
  }
}
 