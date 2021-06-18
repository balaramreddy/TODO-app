import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  checkoutForm : FormGroup;
  valuechangedtracker = " "

  constructor( private fb:FormBuilder) { 
    // this.checkoutForm = fb.group({
    //   email : new FormControl(),
    //   password : new FormControl(),
    //   terms: new FormControl()
    // })

    this.checkoutForm = fb.group({
          email: ['',[Validators.required,Validators.email]],
          password: ['',Validators.required],
          terms: ['',Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
    // set value
    // this.checkoutForm.setValue({
    //   email:'balaramreddy@gmail.com',
    //   password:'12345',
    //   terms:true
    // })

    // patchvalue;
    // this.checkoutForm.patchValue({
    //   email:'balaramreddy@gmail.com',
    //   password:'12345',
      
    //  })
    // this.checkoutForm.get('email').statusChanges.subscribe(data =>{
    //   this.valuechangedtracker = data; 
    //   console.log(data);
    //   })

    this.checkoutForm.statusChanges.subscribe(data =>{
      this.valuechangedtracker = data; 
      console.log(data);
      })
  }

  postData(){
    console.log(this.checkoutForm)
    // console.log(this.checkoutForm.value)
    this.checkoutForm.reset();
  }

  reset(){
    this.checkoutForm.reset();
  }

}
