import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent  {
  popularCategories = [
    { title: 'Photography', description: 'Capture the special moments of your big day.', icon: 'images' },
    { title: 'Videography', description: 'Create stunning portraits with our photographers.', icon: 'videocam' },
    { title: 'Cooperate Events', description: 'Coverage for all types of events and occasions.', icon: 'happy' },
    { title: 'Wedding', description: 'Photography that captures the beauty of nature.', icon: 'aperture' },
  ];

  constructor(private navCtrl: NavController) { }

  
  viewPhotographers() {
    this.navCtrl.navigateForward('/photographers');
  }

  viewPayments() {
    this.navCtrl.navigateForward('/userpayments');
  }

}
