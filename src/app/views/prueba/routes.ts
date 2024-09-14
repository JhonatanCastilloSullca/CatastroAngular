import { Routes } from '@angular/router';

import { PruebaComponent } from './prueba.component';

export const routes: Routes = [
  {
    path: '',
    component: PruebaComponent,
    data: {
      title: 'Prueba'
    }
  }
];
