import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  constructor(private router: Router) {}

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
