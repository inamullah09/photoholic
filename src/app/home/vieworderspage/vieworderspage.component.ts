import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { IOrders } from '../interfaces/home.interface';

@Component({
  selector: 'app-vieworderspage',
  templateUrl: './vieworderspage.component.html',
  styleUrls: ['./vieworderspage.component.scss'],
})
export class VieworderspageComponent  implements OnInit {
  public declare packages: IOrders[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getPaymentHistory(this.homeService.profileId).subscribe(res => {
      this.packages = res;
    })
  }

}
