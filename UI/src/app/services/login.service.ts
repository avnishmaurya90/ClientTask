import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(emailId: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login?emailId=${emailId}&password=${password}`;
    return this.http.get(url).pipe(res => res);
  }
}
