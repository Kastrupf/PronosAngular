import { PlayersService } from 'src/app/services/players/players.service';
import { DataFormService } from './../data-form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnInit {

  formPlayer: FormGroup;
  player: Player;


  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder,
    private dataFormService: DataFormService,
    private router: Router)
     { }

  ngOnInit() {

    this.dataFormService.verifierMail('dummy@email.com');

    this.formPlayer = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.maxLength(30)]],
      mail: [null]
    });
  }

  add(): void {
    let formValue = this.formPlayer.value;
    let player = new Player();
    player.firstName = formValue.firstName;
    player.lastName = formValue.lastName;
    player.email = formValue.mail;
    console.log(player);
    this.playersService.addPlayer(player)
      .subscribe(player => {
        this.router.navigate(['/players']);
      }, err => {
        console.log(err);
      });
  }

  reset(){
    this.formPlayer.reset();
  }
}


