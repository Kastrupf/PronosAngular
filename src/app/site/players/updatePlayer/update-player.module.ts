import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { UpdatePlayerComponent } from './update-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

  const routes: Routes = [
    { path: 'playersUpdate', canActivate: [AuthGuard], component: UpdatePlayerComponent }
  ];
  
  @NgModule({
    declarations: [UpdatePlayerComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forChild(routes)
      ],
      exports:[CommonModule,UpdatePlayerComponent]
  })
export class DataUpddateFormModule { }
