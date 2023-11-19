import { Component } from '@angular/core';
import {Router} from '@angular/router'
// import {}} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendClone';
  onItemSelected(item: string) {
    console.log('Item selected:', item);
  }
  }

