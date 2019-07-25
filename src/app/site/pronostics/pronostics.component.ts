import { Component, OnInit } from '@angular/core';
// import { Evenement } from '../../Models/evenement';
// import { EvenementService } from 'src/app/services/evenement/evenement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pronostics',
  templateUrl: './pronostics.component.html',
  styleUrls: ['./pronostics.component.scss']
})
export class PronosticsComponent implements OnInit {

  // evts: Array<Evenement> = new Array<Evenement>();

  // constructor(private eventService: EvenementService) {
  //   this.eventService.findAll().subscribe(res => {
  //     console.log(res);
  //     this.evts = res;
  // },err=>{
  //     console.log("Erreur de chargement des évènements")
  // }
  // );

  // }
  ngOnInit() {
  }


testObs(){


  let monObservable = new Observable((observer) => {
    let listOfFriends = ["Damien", "Thomas", "Jean-Claude Dusse","Alpha Omega" , "DMX"];
    listOfFriends.forEach((friend: string) => {
        observer.next(friend);
    })
    observer.complete();
});

monObservable.subscribe({
  next(value) { console.log(value); },
  complete() { console.log("C'est fini!"); }
});

}

testtimeOut(){

  setTimeout(function () { console.log(" ****** Salut les copains!  ******") }, 4000);

let listOfFriends = ["Bara", "Abdou", "Fatou"];

listOfFriends.forEach((friend: string) => {
    console.log(friend);
});

}


}
