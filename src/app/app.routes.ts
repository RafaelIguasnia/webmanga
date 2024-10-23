import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'contacto', component: ContactoComponent },
];
