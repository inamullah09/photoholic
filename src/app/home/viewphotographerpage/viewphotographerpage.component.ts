import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from '../services/home.service';
import { IPhotographer } from '../interfaces/home.interface';

@Component({
  selector: 'app-viewphotographerpage',
  templateUrl: './viewphotographerpage.component.html',
  styleUrls: ['./viewphotographerpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ViewphotographerpageComponent implements OnInit{

  public declare photographer: IPhotographer;
  public loading = true;
  public  profileId: string = '';

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.profileId = params['id']; // Assuming 'id' is the parameter name in your route

      // Fetch photographer based on the ID
      this.homeService.getPhotographer(this.profileId).subscribe((res) => {
        this.photographer = res;
        this.loading = false;
      });
    });
  }

  viewPackages() { 
    this.homeService.photographerPackages = this.photographer.pakages;
    this.navCtrl.navigateForward(`/packages`);
  }

  imageError = false;

  handleImageError(): void {
    this.imageError = true;
  }
}
