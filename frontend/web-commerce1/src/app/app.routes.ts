import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';

export const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"auth",
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  }
];