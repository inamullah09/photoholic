import { Component, OnInit } from '@angular/core';
import { ICreatePhotographer } from '../interfaces/home.interface';
import { HomeService } from '../services/home.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createphotographerpage',
  templateUrl: './createphotographerpage.component.html',
  styleUrls: ['./createphotographerpage.component.scss'],
})
export class CreatephotographerpageComponent {
  public createPhotographer: ICreatePhotographer = {
    email: this.homeService.userEmail,
    title: "",
    about: "",
    phone: "",
    location: "",
    webLink: ""
  }
  constructor(private homeService: HomeService, private navCtrl: NavController) { }

  createProfile() {
    this.homeService.createProfile(this.createPhotographer).subscribe(res=>{
      this.navCtrl.navigateRoot('login')
    })
  }

}
