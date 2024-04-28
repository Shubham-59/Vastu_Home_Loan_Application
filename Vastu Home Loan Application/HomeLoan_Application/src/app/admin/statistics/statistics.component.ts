import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit{
  approvedCount: any;
  pendingCount: any;
  rejectedCount: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllEnquiryCountApproved().subscribe((data: any) => {
      this.approvedCount = data;
      console.log(this.approvedCount);
    });

    this.userService.gellAllenquiryCount().subscribe((data: any) => {
      this.pendingCount = data;
      console.log(this.pendingCount);
    });

    this.userService.getAllEnquiryCountRejected().subscribe((data: any) => {
      this.rejectedCount = data;
      console.log(this.rejectedCount);
    });
  }
}