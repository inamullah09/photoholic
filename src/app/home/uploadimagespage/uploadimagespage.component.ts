import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-uploadimagespage',
  templateUrl: './uploadimagespage.component.html',
  styleUrls: ['./uploadimagespage.component.scss'],
})
export class UploadimagespageComponent {
  selectedImages: File[] = [];

  constructor(private homeService: HomeService) {}

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
    this.homeService.uploadImages(1, this.selectedImages).subscribe(res=>{

    })
  }
}
