import { DataFormComponent } from './data-form/data-form.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players/players.service';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interface/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})

export class PlayersComponent implements OnInit {

  listPlayers: Player[];
  players$: Observable<Player[]>;
  player:Player;
  message: string;
  typeListe: number;

  constructor(
    private router: Router,
    private playersService: PlayersService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.listPlayers; //=[];
    this.playersService.list().subscribe(
      players1 => this.listPlayers = players1);
    // this.players$ = this.playersService.list();
    this.message = 'Pas d\'Joueurs dans la liste';

  }

  selectPlayer(p: Player) {
    let link = ['/players'];
    this.router.navigate(link);
  }

  delete(id: number) {
    this.playersService.delete(id).subscribe(
      value => {
        this.playersService.list().subscribe(
          players1 => this.listPlayers = players1);
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DataFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
}
