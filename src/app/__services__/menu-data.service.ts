import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<any> {
    const data: Observable<any>  = this.http.get('../../assets/menu.json');
    return data;
  }
}
