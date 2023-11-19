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
  selectedImages: File[] = [];

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      // Clear existing selected images
      this.selectedImages = [];

      // Add the selected files to the array
      for (let i = 0; i < files.length; i++) {
        this.selectedImages.push(files.item(i)!);
      }
    }
  }

  constructor(private homeService: HomeService, private navCtrl: NavController) { }

  createProfile() {
    this.homeService.createProfile(this.createPhotographer).subscribe(res=>{
      this.homeService.uploadProfilePicture(this.createPhotographer.email, this.selectedImages).subscribe(res=>{
        this.homeService.presentToast('Account created')
        this.navCtrl.navigateRoot('login')
      }, err => {
        this.homeService.presentToast('Error creating account')
        this.navCtrl.navigateRoot('signup')
      })
    }, err => {
      this.homeService.presentToast('Error creating account')
      this.navCtrl.navigateRoot('signup')
    })
  }

}
