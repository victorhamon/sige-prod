import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) {}

  login(model: any) {
    return this.http.post(environment.apiUrl + 'Account/Login', model).pipe(
      map((response: any) => {
        const result = response;
        if (result) {
          localStorage.setItem('token', result.access_token);
        }
      })
    );
  }

  changePassword(model: any) {
    return this.http.post(environment.apiUrl + 'Account/changepassword', model);
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

  getMenu(model: any) {
    return this.http.post(environment.apiUrl + 'Account/GetDynamicMenu', model);
  }

  getCurrentUser() {
    return this.http.get(environment.apiUrl + 'Account/GetCurrentUser');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
