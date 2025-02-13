import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { CoreRoutingModule } from './core.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AuthModule,CoreRoutingModule
  ]
})
export class CoreModule { }
