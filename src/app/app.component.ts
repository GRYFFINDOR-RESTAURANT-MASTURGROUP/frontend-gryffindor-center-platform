import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {MatToolbar} from '@angular/material/toolbar';
import {NgForOf} from '@angular/common';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, MatToolbar, RouterLink, NgForOf, MatButtonToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reserva-restaurante';
  options = [
    {path: '/sign-in', title: 'Iniciar sesión'},
    {path: '/sign-up', title: 'Registrarse'},
  ]
}
