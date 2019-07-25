import { DataFormService } from './../data-form.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.sass']
})
export class DataFormComponent implements OnInit {

  formPlayer: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dataFormService: DataFormService,
    private HttpClientModule: HttpClientModule) { }

  ngOnInit() {

    this.dataFormService.verifierMail('dummy@email.com');

    this.formPlayer = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.maxLength(30)]]
      // email: [null, [Validators.required, Validators.email], [this.verifierMail]]
    });
  }

  // onSubmit() {
    
  //   this.playersService.add(player).subscribe(
  //     data => this.player = data
  //     );
  // }

  // submit() {
  //   console.log(this.formPlayer.value);

  //   this.http.post('https://localhost:8081/players', JSON.stringify({}))
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       this.reset();
  //     },
  //     (error: any) => alert('error'));
  // }

  reset(){
    this.formPlayer.reset();
  }


  // verifierMail(formControl: FormControl) {
  //   return this.dataFormService.verifierMail(formControl.value).(map(mailExists => mailExists ? { mailInvalid: true } : null));
  // }
}


