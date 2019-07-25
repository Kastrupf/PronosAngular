import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actor } from '../../Models/actor';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class ActorService {
    private actorsUrl: string;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
      this.actorsUrl = 'http://localhost:8086/pronos/actors/';
    }

    public findAll(): Observable<Actor[]> {
      return this.http.get<Actor[]>(this.actorsUrl);
    }

    public get(id:number): Observable<Actor>{
      return this.http.get<Actor>(this.actorsUrl+id);
    }

    public delete(id:number){
      return this.http.delete(this.actorsUrl+id);
    }

    public save(actor: Actor) {
      return this.http.post<Actor>(this.actorsUrl, actor);
    }

    public update(actor: Actor) {
      return this.http.put<Actor>(this.actorsUrl, actor);
    }

    public gotoActorList() {
      this.router.navigate(['/actors']);
    }

    public gotoActorUpdate(id) {
      this.router.navigate(['/actorsUpdate', id]);
    }

    public gotoActorSave() {
      this.router.navigate(['/addactors']);
    }

}
