import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { APPCONSTANTS } from 'src/app/consts';
import { ICreatePackage, ICreatePhotographer, IImage, IOrder, IOrders, IPackage, IPhotographer, IPhotographers, IUserPayments } from '../interfaces/home.interface';
import { Subject, catchError, throwError } from 'rxjs';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public photographerPackages: IPackage[] = [];
  public photographers: IPhotographers[] = [];
  public userEmail: string = ''
  public userRole: string = ''
  public userRoleSub: Subject<string> = new Subject();
  
  public profileId: string = ''

  constructor(private http: HttpClient, private toast: ToastController) { }

  public getAllPhotographers(): Observable<Array<IPhotographers>> {
    return this.http.get<Array<IPhotographers>>(`${APPCONSTANTS.ENDPOINT}profile/GetAllProfiles`);
  }

  public getPhotographer(id: string): Observable<IPhotographer> {
    return this.http.get<IPhotographer>(`${APPCONSTANTS.ENDPOINT}profile/GetProfile?id=${id}`);
  }

  public orderPackage(order: IOrder): Observable<any> {
    return this.http.post<any>(`${APPCONSTANTS.ENDPOINT}payment/CreatePayment`, order);
  }

  public createPackage(order: ICreatePackage): Observable<any> {
    return this.http.post<any>(`${APPCONSTANTS.ENDPOINT}profile/AddProfilePakage`, order);
  }

  public createProfile(profile: ICreatePhotographer): Observable<any> {
    return this.http.post<any>(`${APPCONSTANTS.ENDPOINT}profile/CreatProfile`, profile);
  }

  public getPaymentHistory(id: string): Observable<IOrders[]> {
    return this.http.get<any>(`${APPCONSTANTS.ENDPOINT}payment/GetProfilePaymentHistory?id=${id}`);
  }

  public getUserPaymentHistory(email: string): Observable<IUserPayments[]> {
    return this.http.get<any>(`${APPCONSTANTS.ENDPOINT}payment/GetUserPaymentHistory?email=${email}`);
  }

  public uploadImages(id: number, images: File[]): Observable<any> {
    const formData = new FormData();

    formData.append('ProfileId', id.toString());

    images.forEach((image, index) => {
      formData.append(`images`, image);
    });
    return this.http.post(`${APPCONSTANTS.ENDPOINT}profile/AddProfileImages`, formData);
  }

  public uploadProfilePicture(email: string, images: File[]): Observable<any> {
    const formData = new FormData();

    formData.append('Email', email);

    images.forEach((image, index) => {
      formData.append(`ProfilePicture`, image);
    });
    return this.http.post(`${APPCONSTANTS.ENDPOINT}profile/AddProfilePicture`, formData);
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
