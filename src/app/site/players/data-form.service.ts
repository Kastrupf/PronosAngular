import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(private http: HttpClient) { }

  verifierMail(mail: String) {

    return this.http.get('Data/players.json')
      .pipe(
        delay(3000),
        map((data: { mail: any[] }) => data.mail)),
      tap(console.log),
      map((data: { mail: string }[]) => data.filter(v => v.mail === mail)),
      tap(console.log),
      map((data: any[]) => data.length > 0),
      tap(console.log)
  }
}
