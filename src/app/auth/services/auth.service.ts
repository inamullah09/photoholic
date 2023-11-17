import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APPCONSTANTS } from 'src/app/consts';
import { ILogin, ISignup } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: Storage) { }

  login(credentials: ILogin): Observable<any> {
    return this.http.post(`${APPCONSTANTS.ENDPOINT}auth/Login`, credentials);
  }

  signup(userData: ISignup): Observable<any> {
    return this.http.post(`${APPCONSTANTS.ENDPOINT}auth/Register`, userData);
  }

  setToken(token: string) {
    this.storage.set('token', token);
  }

  getToken() {
    return this.storage.get('token');
  }
}
