import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EnquiryForm } from '../../model/enquiry-form';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserService } from '../../service/user.service';
import { EnquiryService } from '../../service/enquiry.service';


@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements AfterViewInit, OnInit {
  dataSource: MatTableDataSource<EnquiryForm>;
  displayedColumns: string[] = ['enquiryId','firstName','lastName','age','address','pincode','mobileNumber','email','dateOfBirth','panCard','adharCard','requestedLoanAmount', 'status','action'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 enquiryData:EnquiryForm[];
constructor(private userService:UserService,private enquiryService:EnquiryService){}
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
      
    this.userService.getAllEnquiry().subscribe(
      (data:EnquiryForm[])=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        console.log(data)
      }
    )
  }
  forwardToOE(enquiry: EnquiryForm){
   

    this.enquiryService.updateTheStatusForwardToOE(enquiry).subscribe();
    


  }
}
