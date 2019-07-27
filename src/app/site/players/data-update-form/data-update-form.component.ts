import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/player';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlayersService } from 'src/app/services/players/players.service';
import { DataUpdateFormService } from './data-update-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-update-form',
  templateUrl: './data-update-form.component.html',
  styleUrls: ['./data-update-form.component.sass']
})
export class DataUpdateFormComponent implements OnInit {

  formPlayer: FormGroup;
  player: Player;
  
  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder,
    private dataUpdateFormService: DataUpdateFormService,
    private router: Router) { }

  ngOnInit() {
   this.formPlayer = this.formBuilder.group({
      firstName: [],
      lastName: [],
      mail: []
    });
  }

  update (id: number): void {
    let formValue = this.formPlayer.value;
    let player = new Player();
    this.playersService.getById(id).
    subscribe(data => {
    player.firstName = formValue.firstName;
    player.lastName = formValue.lastName;
    player.mail = formValue.mail;
    }); 
    console.log(player);
    this.playersService.addPlayer(player)
      .subscribe(data => {
        this.playersService.gotoPlayersUpdate(id);
        // this.router.navigate(['/players']);
      }, err => {
        console.log(err);
      });
  }







  reset() {
    this.formPlayer.reset();
  }
}