import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-uploadimagespage',
  templateUrl: './uploadimagespage.component.html',
  styleUrls: ['./uploadimagespage.component.scss'],
})
export class UploadimagespageComponent {
  selectedImages: File[] = [];

  constructor(private homeService: HomeService, private navCtrl: NavController) {}

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

  uploadImages() {
    this.homeService.uploadImages(Number.parseInt(this.homeService.profileId), this.selectedImages).subscribe(res=>{
      this.homeService.presentToast('Image uploaded successfully')
      this.navCtrl.navigateForward('phome')
    }, (err) => {
      this.homeService.presentToast('Error uploading image')
      this.navCtrl.navigateForward('phome')
    })
  }
}
