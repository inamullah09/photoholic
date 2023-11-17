import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ILogin } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  appName = 'Photoholic';
  loginAs = 'user';
  email!: string;
  password!: string;
  loginData: ILogin = {
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController, private authService: AuthService, private storage: Storage) {}

  login() {
    this.authService.login(this.loginData).subscribe(res => {
      this.authService.setToken(res.token)
      this.navCtrl.navigateRoot('/home');
    })
  }

  forgotPassword() {
    // Add your forgot password logic here
    console.log('Forgot Password');
  }

  
  goToSignup() {
    // Navigate to the signup page
    this.navCtrl.navigateForward('/signup'); // Replace '/signup' with the actual path of your signup page
  }
}
