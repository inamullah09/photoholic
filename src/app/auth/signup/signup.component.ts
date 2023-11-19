import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ISignup } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  appName = 'Photoholic';
  signupAs = 'user';
  signupData: ISignup = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  };

   constructor(private navCtrl: NavController, private authService: AuthService, private homeService: HomeService) {}

   goToLogin() {
    
     this.navCtrl.navigateBack('/login'); // Replace '/login' with the actual path of your login page
   }
 
   signup() {
     this.signupData.role = this.signupAs;
     this.authService.signup(this.signupData).subscribe(res => {
      this.homeService.userEmail = this.signupData.email;
      if (this.signupAs === 'user') {
        this.navCtrl.navigateRoot('/home')
      } else {
        this.navCtrl.navigateRoot('/createprofile')
      }
    })
     // Implement your signup logic here
   };
}
