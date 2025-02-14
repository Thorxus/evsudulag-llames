import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from './route.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouteModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
