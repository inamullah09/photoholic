import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController) {}

  login() {
    // Add your login logic here based on this.email, this.password, and this.loginAs
    console.log('Login as:', this.loginAs);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Redirect to the home page or any other page upon successful login
    this.navCtrl.navigateRoot('/home');
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
