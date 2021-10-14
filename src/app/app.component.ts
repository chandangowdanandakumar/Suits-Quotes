import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotesList = [1,2,3,4,5,6,7,8,9,10]

  constructor( private router:Router){}
  navtoAddNote(){
    this.router.navigateByUrl('add-quote')
  }
}
