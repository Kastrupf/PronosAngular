import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/Models/player';
import { tap, delay, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  [x: string]: any;

  private playersUrl = 'http://localhost:8090/pronos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.playersUrl}/players`, this.httpOptions).
      pipe(delay(1000),
        tap(console.log)
      );
  }

  getById(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.playersUrl}/players/${id}`, this.httpOptions).
      pipe(take(1));
  }
 
  add(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.playersUrl}/players`, player, this.httpOptions);
  }

  update(id: number): Observable<Player> {
    return this.http.put<Player>(`${this.playersUrl}/players/${id}`, this.httpOptions)
    .pipe(delay(1000),
    tap(console.log)
  );
  }

  delete(id: number) {
    return this.http.delete<Player>(`${this.playersUrl}/players/${id}`, this.httpOptions)
    .pipe(delay(1000),
    tap(console.log)
  );
  }

  
  gotoPlayersList() {
    this.router.navigate(['/players']);
  }
  
  gotoPlayersCreate() {
    this.router.navigate(['/playersCreate']);
  }

  gotoPlayersUpdate(id) {
    this.router.navigate(['/playersUpdate', id]);
  }
 
}