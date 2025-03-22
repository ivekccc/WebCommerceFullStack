import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CategoryProductsComponent } from './features/products/components/category-products/category-products.component';

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
      },
      {
        path:"category/:id",
        component:CategoryProductsComponent
      }

    ]
  },
  {
    path:"auth",
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  }

];