import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

interface IPackage {
  id: number,
  name: string,
  description: string,
  price: number
}

@Component({
  selector: 'app-packagespage',
  templateUrl: './packagespage.component.html',
  styleUrls: ['./packagespage.component.scss'],
})
export class PackagespageComponent {
  photographerPackages: Array<IPackage> = [
    { id: 1, name: 'Basic Package', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 150 },
    { id: 2, name: 'Premium Package', description: 'Quisque varius lectus vel aliquet feugiat.', price: 250 },
    { id: 3, name: 'Diamond Package', description: 'Quisque varius lectus vel aliquet feugiat.', price: 250 },
    { id: 4, name: 'Gold Package', description: 'Quisque varius lectus vel aliquet feugiat.', price: 450 },
  ];

  constructor(private navCtrl: NavController, private toast: ToastController) {}

  orderPackage(photoPackage: IPackage) {
    // Handle the order logic here
    console.log(`Order placed for ${photoPackage.name}`);
    // You can add additional logic, such as navigating to a confirmation page
    this.presentToast();
    this.navCtrl.navigateRoot('home')
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
