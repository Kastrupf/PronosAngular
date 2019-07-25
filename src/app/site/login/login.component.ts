import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  errorMessage: string;

  username: string;
  password: string;
  role: string;

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let titlePattern = '[a-zA-Z0-9]{6,}';
    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.minLength(6), Validators.pattern(titlePattern)],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.errorMessage=null;
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/');
    this.errorMessage = this.authService.errorMsg;
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  isAuth(): boolean {
    if (this.authService.isLoggedIn) {
      alert("is auth :"+this.authService.isLoggedIn)
      return true;
    }
    return false;
  }
}
