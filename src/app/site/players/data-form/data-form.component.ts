import { PlayersService } from 'src/app/services/players/players.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/player';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnInit {

  formPlayer: FormGroup;
  player: Player;
  subscriptionDate: FormControl;

  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscriptionDate = new FormControl('');
    this.formPlayer = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.maxLength(30)]],
      mail: [null, [Validators.required, Validators.maxLength(30)]]
    });
  }

  add(): void {
    let formValue = this.formPlayer.value;
    let player = new Player();
    player.firstName = formValue.firstName;
    player.lastName = formValue.lastName;
    player.mail = formValue.mail;
    console.log(player);
    this.playersService.addPlayer(player)
      .subscribe(player => {
        this.playersService.gotoPlayersList();
       }, err => {
        console.log(err);
      });
  }

  reset() {
    this.formPlayer.reset();
  }
}


