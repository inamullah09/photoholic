import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { APPCONSTANTS } from 'src/app/consts';
import { ICreatePackage, IImage, IOrder, IOrders, IPackage, IPhotographer, IPhotographers } from '../interfaces/home.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public photographerPackages: IPackage[] = [];
  public photographers: IPhotographers[] = [];

  constructor(private http: HttpClient) { }

  public getAllPhotographers(): Observable<Array<IPhotographers>> {
    return this.http.get<Array<IPhotographers>>(`${APPCONSTANTS.ENDPOINT}profile/GetAllProfiles`)
  }

  public getPhotographer(id: string): Observable<IPhotographer> {
    return this.http.get<IPhotographer>(`${APPCONSTANTS.ENDPOINT}profile/GetProfile?id=${id}`)
  }

  public orderPackage(order: IOrder): Observable<any> {
    return this.http.post<any>(`${APPCONSTANTS.ENDPOINT}payment/CreatePayment`, order)
  }

  public createPackage(order: ICreatePackage): Observable<any> {
    return this.http.post<any>(`${APPCONSTANTS.ENDPOINT}profile/AddProfilePakage`, order)
  }

  public getPaymentHistory(id: string): Observable<IOrders[]> {
    return this.http.get<any>(`${APPCONSTANTS.ENDPOINT}payment/GetProfilePaymentHistory?id=${id}`)
  }

  public uploadImages(id: number, images: File[]): Observable<any> {
    const formData = new FormData();

    formData.append('ProfileId', id.toString());

    images.forEach((image, index) => {
      formData.append(`images`, image);
    });
    return this.http.post(`${APPCONSTANTS.ENDPOINT}profile/AddProfileImages`, formData);
  }
}
