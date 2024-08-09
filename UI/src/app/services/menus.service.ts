import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getMenus() {
    return this.http.get(`${this.apiUrl}/menu`).pipe(res => res);
  }


}

