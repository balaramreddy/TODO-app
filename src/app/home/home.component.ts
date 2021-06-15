import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eventsubmit(signinform:NgForm){
    console.log(signinform)
    console.log(signinform.value);
    console.log(signinform.value.email)

  }

}
