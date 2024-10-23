import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor
import { RouterModule } from '@angular/router'; // También importa RouterModule si tienes rutas

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule], // Asegúrate de incluir CommonModule aquí
})
export class AppComponent {
  items = ['Naruto', 'One Piece', 'Bleach']; // Ejemplo de datos
}
