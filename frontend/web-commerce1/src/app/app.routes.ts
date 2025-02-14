import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"",
        component:HomeComponent
      }
    ]
  },
  {
    path:"auth",
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  }

];