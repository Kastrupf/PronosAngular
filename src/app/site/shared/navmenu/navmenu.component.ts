import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {

  constructor( private router: Router,private authService: AuthService) { }

  ngOnInit() {
  }


  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  isAuth():boolean{
    if (this.authService.isLoggedIn){
      return true;
    }
    return false;
  }
}
