import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderstatus :any;
  constructor() { }

  ngOnInit(): void {
    new Observable(obsever =>{
      setTimeout(() => {
        obsever.next('inprogress')
      }, 4000);

      setTimeout(() => {
        obsever.next('processing')
      }, 8000);

      setTimeout(() => {
        obsever.next('completed')
      }, 12000);
    }).subscribe(data =>{
      this.orderstatus = data;
    })
  }

}
