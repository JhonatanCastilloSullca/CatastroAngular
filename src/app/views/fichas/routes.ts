import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Fichas'
        },
        children: [
            {
                path: '',
                redirectTo: 'individual',
                pathMatch: 'full'
            },
            {
                path: 'individual',
                loadComponent: () => import('./individual/individual.component').then(m => m.IndividualComponent),
                data: {
                    title: 'Individual'
                }
            },
            {
                path: 'cotitularidad',
                loadComponent: () => import('./cotitularidad/cotitularidad.component').then(m => m.CotitularidadComponent),
                data: {
                    title: 'Cotitularidad'
                }
            },

        ]
    }
];

