import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';
import { ProductsModule } from './features/products/products.module';
import { UsersModule } from './features/users/users.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SharedModule,CoreModule,HomeModule,ProductsModule,UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Web Commerce';
}
