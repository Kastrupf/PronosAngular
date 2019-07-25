import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string="../Data/users.json";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Array<User>>(this.url);
  }
  addUser(u:User){
    return this.http.post(this.url,u);
  }

  // getJson() :Observable<any> {
  //   return this.http.get("./Data/users.json")
  //   .(res => res.json())
  //   .catch((error:any) => console.log(error));
  //   }{


  // }
}
