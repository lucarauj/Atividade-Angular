import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component'
import {LoginComponent} from './login/login.component'
import {MenuComponent} from './menu/menu.component'
import {RodapeComponent} from './rodape/rodape.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    InicioComponent,
    LoginComponent,
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LK Games';
}
