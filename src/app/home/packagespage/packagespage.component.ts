import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HomeService } from '../services/home.service';
import { IOrder, IPackage } from '../interfaces/home.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-packagespage',
  templateUrl: './packagespage.component.html',
  styleUrls: ['./packagespage.component.scss'],
})
export class PackagespageComponent implements OnInit{
  public photographerPackages: IPackage[] = [];

  constructor(private navCtrl: NavController, private toast: ToastController, private homeService: HomeService, private authService: AuthService) {}

  ngOnInit(): void {
    this.photographerPackages = this.homeService.photographerPackages;
  }

  async orderPackage(photoPackage: IPackage) {
    const userData = JSON.parse(await this.authService.getUserProfile())
    console.log(userData)
    const order: IOrder = {
      pakageId: photoPackage.pakageId,
      totalOrders: 1,
      ammount: photoPackage.price.toString(),
      serviceRequiredOn: new Date().toISOString(),
      email: userData.email || 'test333@fmail.com'
    } 
    this.homeService.orderPackage(order).subscribe(res => {
      console.log('done')
      this.presentToast();
      this.navCtrl.navigateRoot('home')
    })
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Order Placed, please wait for photographers verification!',
      duration: 3500,
      position: 'bottom',
    });

    await toast.present();
  }
}
