import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-forgetpage',
  templateUrl: './forgetpage.component.html',
  styleUrls: ['./forgetpage.component.scss'],
})
export class ForgetpageComponent {
  appName = 'Photoholic';
  forgotPasswordData = {
    email: '',
    oldPassword: '',
    newPassword: '',
  };

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  resetPassword() {
    this.authService.forgetPassword(this.forgotPasswordData).subscribe(res => {
      this.authService.presentToast('Password changed')
      this.goToLogin();
    }, err => {
      this.authService.presentToast('Error, invalid data')
      this.goToLogin();
    })
  }

  goToLogin() {
    // Navigate back to the login page
    this.navCtrl.navigateBack('/login');
  }
}
