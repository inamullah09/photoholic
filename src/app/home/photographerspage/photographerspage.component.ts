import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomeService } from '../services/home.service';
import { IPhotographer, IPhotographers } from '../interfaces/home.interface';

@Component({
  selector: 'app-photographerspage',
  templateUrl: './photographerspage.component.html',
  styleUrls: ['./photographerspage.component.scss'],
})
export class PhotographerspageComponent implements OnInit {
  photographers: Array<IPhotographers> = [];

  constructor(
    private navCtrl: NavController,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.getAllPhotographers();
  }

  private getAllPhotographers() {
    this.homeService.getAllPhotographers().subscribe((res) => {
      res.forEach((photographer) => {
        this.checkImage(photographer.pofilePicture).then((success) => {
          if (!success) {
            photographer.pofilePicture = '../../../assets/dummy-user.webp';
            console.log(photographer.pofilePicture);
          }
        });
      });
      this.photographers = res;
      this.homeService.photographers = res;
    });
  }

  viewProfile(photographer: IPhotographers) {
    // Implement navigation to photographer's profile page
    console.log(`View profile of ${photographer}`);
    console.log(photographer);
    this.navCtrl.navigateForward(`/viewphotographer/${photographer.profileID}`);
  }

  checkImage(image: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = image;

      img.onload = () => {
        resolve(true);
      };

      img.onerror = () => {
        resolve(false);
      };
    });
  }
}
