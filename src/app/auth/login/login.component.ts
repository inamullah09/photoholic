import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ILogin } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { TokenService } from 'src/app/home/services/token.service';

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

  constructor(private navCtrl: NavController, private authService: AuthService, private tokenService: TokenService) {}

  login() {
    this.authService.login(this.loginData).subscribe(res => {
      this.authService.setToken(res.token)
      const decodedToken = this.tokenService.decodeToken(res.token);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      console.log(role);
      this.authService.setUserProfile(JSON.stringify(this.loginData))
      role == 'user' ? this.navCtrl.navigateRoot('/home') : this.navCtrl.navigateRoot('/phome');
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
