import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  Lists= [];
  constructor(private as:AdminService) { }

  ngOnInit(): void {
    this.Lists = this.as.getContacts()
  }

}
