import { HttpClientModule } from '@angular/common/http';
import { CreatePlayerComponent } from './create-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';


const routes: Routes = [
  { path: 'playersCreate', canActivate: [AuthGuard], component: CreatePlayerComponent }
];


@NgModule({
  declarations: [CreatePlayerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
    ],
    exports:[CommonModule,CreatePlayerComponent]
})
export class CreatePlayerModule { }
