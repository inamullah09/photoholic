import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { ICreatePackage } from '../interfaces/home.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createpackagepage',
  templateUrl: './createpackagepage.component.html',
  styleUrls: ['./createpackagepage.component.scss'],
})
export class CreatepackagepageComponent {
  public packageName: string = '';
  public packagePrice: number = 0;
  public packageDescription: string = '';

  constructor(private homeService: HomeService, private navCtrl: NavController) { }

  public addPackage() {
    const createNewPackage: ICreatePackage = {
      profileId: 3,
      pakageName: this.packageName,
      description: this.packageDescription,
      price: this.packagePrice,
      hours: 10
      
    }
    this.homeService.createPackage(createNewPackage).subscribe(res => {
      this.navCtrl.navigateRoot('phome')
    })
  }

}
