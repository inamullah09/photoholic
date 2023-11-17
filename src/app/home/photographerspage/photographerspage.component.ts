import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomeService } from '../services/home.service';
import { IPhotographer, IPhotographers } from '../interfaces/home.interface';


@Component({
  selector: 'app-photographerspage',
  templateUrl: './photographerspage.component.html',
  styleUrls: ['./photographerspage.component.scss'],
})
export class PhotographerspageComponent implements OnInit{
  photographers: Array<IPhotographers> = [];

  constructor(private navCtrl: NavController, private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAllPhotographers().subscribe(res => this.photographers = res)
  }

  viewProfile(photographer: IPhotographers) {
    // Implement navigation to photographer's profile page
    console.log(`View profile of ${photographer}`);
    console.log(photographer)
    this.navCtrl.navigateRoot(`/viewphotographer/${photographer.profileID}`);
  }

}
