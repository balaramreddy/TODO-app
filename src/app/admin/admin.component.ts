import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  Lists: Admin[] = [];
  years = [];
  launch=[];

  constructor(private as: AdminService) {}

  ngOnInit(): void {
    this.as.getContacts().subscribe((data) => {
      this.Lists = data;
      console.log(data);

      // to filter the duplicate values
      const distinctyears = ([...new Set(data.map((x) => x.launch_year))]);
      this.years = distinctyears;
      console.log(distinctyears);

      const successfull_launch = ([...new Set(data.map((x) => x.launch_success))]);
      this.launch = successfull_launch;
      console.log(successfull_launch);
    });
    
  }
  selectedyear?: any;

  onSelect(year_list:any){
  this.selectedyear= year_list;
  console.log(this.selectedyear)
}
}


// this.as.getyear().subscribe((a)=>{
    //   let distinctyears = ([...new Set(a.map(x  =>x.launch_year))]);
    //   this.years= distinctyears
    //   console.log(distinctyears)
    // })