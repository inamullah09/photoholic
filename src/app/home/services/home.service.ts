import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { APPCONSTANTS } from 'src/app/consts';
import { IPhotographer, IPhotographers } from '../interfaces/home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getAllPhotographers(): Observable<Array<IPhotographers>> {
    return this.http.get<Array<IPhotographers>>(`${APPCONSTANTS.ENDPOINT}profile/GetAllProfiles`)
  }

  public getPhotographer(id: string): Observable<IPhotographer> {
    return this.http.get<IPhotographer>(`${APPCONSTANTS.ENDPOINT}profile/GetProfile?id=${id}`)
  }
}
