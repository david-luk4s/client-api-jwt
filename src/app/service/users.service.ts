import { Injectable } from '@angular/core';

// add imports
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiRoutes = {
  login: 'login',
  validate_login: 'validate_login',
  users: 'users'
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UriApi: string = '';

  constructor(private requests: HttpClient) { }

  public login = (user: any) => {

    let uri = `${this.UriApi}/${ApiRoutes.login}`;

    return this.requests.post(uri, JSON.stringify(user), this.loadHeaders() );

  };

  private loadHeaders = (token: string = '')  => {

    let headers =  new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.token_auth.v1',
      'Requirer': 'ponto',
      'Authorization': `Bearer ${token}`
    });

    return {headers};
  };

  
}
