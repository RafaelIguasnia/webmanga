import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  imports: [CommonModule, RouterModule],
})
export class DetallesComponent implements OnInit {
  manga: { 
    id: number; 
    nombre: string; 
    autor: string; 
    sinopsis: string; 
    imagen: string 
  } | undefined;

  mangas = [
    { 
      id: 1, 
      nombre: 'Naruto', 
      autor: 'Masashi Kishimoto', 
      sinopsis: 'Un joven ninja busca ser Hokage.', 
      imagen: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' 
    },
    { 
      id: 2, 
      nombre: 'One Piece', 
      autor: 'Eiichiro Oda', 
      sinopsis: 'Piratas en busca del legendario tesoro One Piece.', 
      imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Main_characters_of_One_Piece.png/290px-Main_characters_of_One_Piece.png' 
    },
    { 
      id: 3, 
      nombre: 'Bleach', 
      autor: 'Tite Kubo', 
      sinopsis: 'Un joven obtiene poderes de shinigami.', 
      imagen: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png' 
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const mangaId = this.route.snapshot.paramMap.get('id');
    if (mangaId) {
      this.manga = this.mangas.find(m => m.id === +mangaId);
    }
  }
}
