import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
})
export class AuthModule { }
