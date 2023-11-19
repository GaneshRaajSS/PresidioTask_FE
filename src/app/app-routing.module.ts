import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { InspirationComponent } from './inspiration/inspiration.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }, 
  { path: 'info', component: PersonalInfoComponent }, 
  { path: 'designs', component: InspirationComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
