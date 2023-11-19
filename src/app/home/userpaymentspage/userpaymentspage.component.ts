import { Component, OnInit } from '@angular/core';
import { IUserPayments } from '../interfaces/home.interface';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-userpaymentspage',
  templateUrl: './userpaymentspage.component.html',
  styleUrls: ['./userpaymentspage.component.scss'],
})
export class UserpaymentspageComponent  implements OnInit {
  public declare packages: IUserPayments[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getUserPaymentHistory(this.homeService.userEmail).subscribe(res => {
      this.packages = res;
    })
  }

}
