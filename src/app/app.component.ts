import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {NgForOf} from '@angular/common';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, RouterLink, NgForOf, MatButtonToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reserva-restaurante';
  options = [
    {path: '/sign-up', title: 'Registrarse'},
    {path: '/sign-in', title: 'Iniciar sesión'},
  ]
  option = [
    {path: '/sign-in-admin', title: 'Iniciar sesión como administrador'},
  ]
}
