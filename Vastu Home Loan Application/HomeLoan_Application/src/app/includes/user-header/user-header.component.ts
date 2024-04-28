import { Component, OnInit } from '@angular/core';
import { UserDetailes } from '../../model/user-detailes';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit {
  user:UserDetailes
  ngOnInit(): void {
    
    let user_Json:string=sessionStorage.getItem("user")
    this.user=JSON.parse(user_Json)
    console.log(user_Json)
  }

}
