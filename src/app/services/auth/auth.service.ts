import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  errorMsg: string;
  constructor(private http: HttpClient) {this.errorMsg=null}

  public login(userInfo: User){
    if (userInfo.username == 'admin123' && userInfo.password == 'admin'){              
              localStorage.setItem('ACCESS_TOKEN', "access_token");               
    }else{
      this.errorMsg="Login and/or password invalid !";
    }
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
}
}
