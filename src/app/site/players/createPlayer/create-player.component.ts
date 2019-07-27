import { PlayersService } from 'src/app/services/players/players.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/player';


@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html'
})
export class CreatePlayerComponent implements OnInit {

  player: Player;
  listPlayers: Player[];
  formPlayer: FormGroup;
  subscriptionDate: FormControl;

  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscriptionDate = new FormControl('');
    this.formPlayer = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.maxLength(30)]],
      mail: [null, [Validators.required, Validators.email]],

    });
  }

  onAdd(): void {
    let formValue = this.formPlayer.value;
    let player = new Player();
    player.firstName = formValue.firstName;
    player.lastName = formValue.lastName;
    player.mail = formValue.mail;
    console.log(player);
    this.playersService.add(player)
      .subscribe(player => {
        this.playersService.getAll().subscribe(
          players1 => this.listPlayers = players1);
      }, err => {
        console.log(err);
      });
  }

  onReset() {
    this.formPlayer.reset();
  }
}
