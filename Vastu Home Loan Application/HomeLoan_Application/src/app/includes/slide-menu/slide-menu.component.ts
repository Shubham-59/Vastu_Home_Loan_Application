import { Component, OnInit } from '@angular/core';
import { UserOption } from '../../model/user-option';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.css'
})
export class SlideMenuComponent implements OnInit{

  userOption:any[]
userType:string
  ngOnInit(): void {
      
    this.userOption=UserOption.option;
    let userJson=sessionStorage.getItem("user");
    let user:any=JSON.parse(userJson);
    this.userType=user.userType;
  }

}
