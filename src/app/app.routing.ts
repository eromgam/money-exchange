import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './features/home/home.module#HomeModule'
  }
];
