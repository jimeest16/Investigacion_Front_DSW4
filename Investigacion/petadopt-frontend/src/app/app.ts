import { Component } from '@angular/core';
import { MascotaListComponent } from './components/mascota-lista/mascota-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MascotaListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}