import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersService } from 'src/app/services/players/players.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html'
})
export class UpdatePlayerComponent implements OnInit {

  formPlayer: FormGroup;

  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.playersService.getById(id)),
      )
      .subscribe(player => this.updateForm(player));
    this.formPlayer = this.formBuilder.group({
      id: [null],
      firstName: [null, [Validators.required, Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.maxLength(30)]],
      mail: [null, [Validators.required, Validators.email]]
    });
  }

  updateForm(player) {
    this.formPlayer.patchValue({
      id: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      mail: player.mail
    });
  }

  onUpdate() {
  }
  // onUpdate(id: number): void {
  //   let formValue = this.formPlayer.value;
  //   let player = new Player();
  //   this.playersService.getById(id).
  //     subscribe(data => {
  //       player.firstName = formValue.firstName;
  //       player.lastName = formValue.lastName;
  //       player.mail = formValue.mail;
  //     });
  //   console.log(player);
  //   this.playersService.addPlayer(player)
  //     .subscribe(data => {
  //       this.playersService.gotoPlayersUpdate(id);
  //       // this.router.navigate(['/players']);
  //     }, err => {
  //       console.log(err);
  //     });
  // }

  onReset() {
    this.formPlayer.reset();
  }
}