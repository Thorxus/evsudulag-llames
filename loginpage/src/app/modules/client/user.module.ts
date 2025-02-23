import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from './route.module';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [LoginComponent, DetailComponent],
  imports: [
    CommonModule,
    RouteModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
