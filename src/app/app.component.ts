import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Flight} from './model/flight';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'app';
// }

   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit { 
 
  flight: Flight;

  constructor(private http: HttpClient){}
    
  ngOnInit(){
     let test =  this.http.get('http://localhost:54956/api/Flights/1');
     test.subscribe((data:Flight) => this.flight=data);
  }
}