import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viewphotographerpage',
  templateUrl: './viewphotographerpage.component.html',
  styleUrls: ['./viewphotographerpage.component.scss'],
})
export class ViewphotographerpageComponent {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  viewPackages() { 
    this.navCtrl.navigateRoot(`/packages`);
  }
  

}
