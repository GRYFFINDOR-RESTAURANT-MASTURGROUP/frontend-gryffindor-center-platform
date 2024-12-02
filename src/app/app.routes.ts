import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: '',                 redirectTo: 'home', pathMatch: 'full'},
  { path: 'sign-up',          component: SignUpComponent},
  { path: 'sign-in',          component: SignInComponent},
  { path: '**',               component: PageNotFoundComponent }
];
