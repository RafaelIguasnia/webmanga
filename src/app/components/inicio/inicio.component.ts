import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule, RouterModule], // Asegúrate de importar estos módulos
})
export class InicioComponent {
  mangas = [
    { id: 1, nombre: 'Naruto' },
    { id: 2, nombre: 'One Piece' },
    { id: 3, nombre: 'Bleach' },
  ];
}
