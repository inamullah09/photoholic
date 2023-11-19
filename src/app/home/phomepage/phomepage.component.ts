import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-phomepage',
  templateUrl: './phomepage.component.html',
  styleUrls: ['./phomepage.component.scss'],
})
export class PhomepageComponent {

  constructor(private navCtrl: NavController) { }

  goToCreatePackage() {
    console.log("nnav")
    this.navCtrl.navigateForward('/createpackage');
  }

  goToUploadImages() {
    this.navCtrl.navigateForward('/uploadimages');
  }

  goToViewOrders() {
    this.navCtrl.navigateForward('/vieworders');
  }
}
