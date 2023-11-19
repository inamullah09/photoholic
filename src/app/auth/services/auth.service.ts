import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APPCONSTANTS } from 'src/app/consts';
import { IForgetPassword, ILogin, ISignup } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: Storage, private toast: ToastController) {
    this.storage.create();
   }

  login(credentials: ILogin): Observable<any> {
    return this.http.post(`${APPCONSTANTS.ENDPOINT}auth/Login`, credentials);
  }

  forgetPassword(credentials: IForgetPassword): Observable<any> {
    return this.http.post(`${APPCONSTANTS.ENDPOINT}auth/changePassword`, credentials);
  }

  signup(userData: ISignup): Observable<any> {
    return this.http.post(`${APPCONSTANTS.ENDPOINT}auth/Register`, userData);
  }

  setToken(token: string) {
    this.storage.set('token', token);
  }

  setUserProfile (userData: string) {
    this.storage.set('user', userData)
  }

  getUserProfile () {
    return this.storage.get('user')
  }

  getToken() {
    return this.storage.get('token');
  }

  async presentToast(text: string) {
    const toast = await this.toast.create({
      message: text,
      duration: 3500,
      position: 'bottom',
    });

    await toast.present();
  }
}
