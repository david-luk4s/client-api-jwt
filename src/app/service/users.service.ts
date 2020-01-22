import { Injectable } from '@angular/core';

// add imports
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiRoutes = {
  login: 'login',
  users: 'users'
};

const headerApi = '';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UriApi: string = '';

  constructor(private requests: HttpClient) { }

  public login = (user: any) => {

    let uri = `${this.UriApi}/${ApiRoutes.login}`;
    let headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/vnd.token_auth.v1','Requirer': 'client-api-jwt',});

    return this.requests.post<any>(uri, JSON.stringify(user), {headers: headers, observe: 'response'});

  };


}
