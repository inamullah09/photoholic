import { Component } from '@angular/core';
import { HomeService } from './home/services/home.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: ''},
    { title: 'Logout', url: '/login', icon: ''},
    { title: 'View Photographers', url: '/photographers', icon: ''},
  ];
  constructor(private homeService: HomeService){
    this.updateNav(this.homeService.userRole);
    this.homeService.userRoleSub.subscribe(res => {
      this.updateNav(res);
    })
  }

  updateNav(role: string) {
    if (role == 'user') {
      this.appPages = [
        { title: 'Home', url: '/home', icon: ''},
        { title: 'Logout', url: '/login', icon: ''},
        { title: 'View Photographers', url: '/photographers', icon: ''},
      ]
    } else {
      this.appPages = [
        { title: 'Home', url: '/phome', icon: ''},
        { title: 'Logout', url: '/login', icon: ''},
      ]
    }
  }


}
