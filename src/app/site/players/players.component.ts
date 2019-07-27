import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players/players.service';
import { Observable, empty, Subject } from 'rxjs';
import { Player } from 'src/app/Models/player';
import { CreatePlayerComponent } from './createPlayer/create-player.component';
import { UpdatePlayerComponent } from './updatePlayer/update-player.component';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})

export class PlayersComponent implements OnInit {

  listPlayers: Player[];
  players$: Observable<Player[]>;
  player: Player;
  typeListe: number;
  error$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private playersService: PlayersService,
    public dialog: MatDialog) { }

  ngOnInit() {
    // this.playersService.list().subscribe(
    //   data => this.listPlayers = data);
    this.players$ = this.playersService.getAll().
      pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return empty();
        })
      );
  }

  onGetAll() {
    this.playersService.getAll()
    .subscribe(data=>{
      this.listPlayers=data;
    },err=>{
      console.log(err);
    });
    this.playersService.gotoPlayersList;
    // let link = ['/players'];
    // this.router.navigate(link);
  }
  
  onUpdate(id: number) {
    this.playersService.update(id)
      .subscribe(() => this.playersService.gotoPlayersList());
  }

  onDelete(id: number) {
    this.playersService.delete(id)
      .subscribe(value => {
        this.playersService.getAll()
          .subscribe(
            listPlayersRefresh => this.listPlayers = listPlayersRefresh);
      });
  }

  onOpenDialogAdd() {
    const dialogRef = this.dialog.open(CreatePlayerComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onOpenDialogUpdate(id: number) {
    const dialogRef = this.dialog.open(UpdatePlayerComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
