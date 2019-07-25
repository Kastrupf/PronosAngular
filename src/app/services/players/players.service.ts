import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interface/player';


@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  [x: string]: any;

     private playersUrl = 'http://localhost:8094/pronos';

      httpOptions= {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      };

    constructor(
      private http: HttpClient, 
      private route: ActivatedRoute, 
      private router: Router
      ){
    }

    public list(): Observable<Player[]> {
      return this.http.get<Player[]>(`${this.playersUrl}/players`,this.httpOptions);
    }

    public getById(id:number): Observable<Player>{
      return this.http.get<Player>(`${this.playersUrl}/players/${id}`, this.httpOptions);
    }

    public delete(id:number){
      return this.http.delete<Player>(`${this.playersUrl}/players/delete/${id}`, this.httpOptions);
    }

    public add(player: Player) {
      return this.http.post<Player>(`${this.playersUrl}/players`, player, this.httpOptions);
    }

    public update(player: Player) {
      return this.http.put<Player>(this.playersUrl, player);
    }

    public gotoPlayersList() {
      this.router.navigate(['/players']);
    }

    public gotoPlayersUpdate(id) {
      this.router.navigate(['/playersSave', id]);
    }

    public gotoPlayersSave() {
      this.router.navigate(['/playersCreate']);
    }

}