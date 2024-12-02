import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';
import {TablesManagementComponent} from './restaurant/pages/tables-management/tables-management.component';

export const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: '',                 redirectTo: 'home', pathMatch: 'full'},
  { path: 'sign-up',          component: SignUpComponent},
  { path: 'sign-in',          component: SignInComponent},
  { path: 'tables',           component: TablesManagementComponent },
  { path: '**',               component: PageNotFoundComponent }
];
