import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  appName = 'Photoholic';
  signupAs = 'user';
  name!: string;
  email!: string;
  password!: string;

   constructor(private navCtrl: NavController) {}

   goToLogin() {
     // Navigate to the login page
     this.navCtrl.navigateBack('/login'); // Replace '/login' with the actual path of your login page
   }
 
   signup() {
     // Implement your signup logic here
   }
}
