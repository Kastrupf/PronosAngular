import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { DataUpdateFormComponent } from './data-update-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

  const routes: Routes = [
    { path: 'players/updateForm', canActivate: [AuthGuard], component: DataUpdateFormComponent }
  ];
  
  @NgModule({
    declarations: [DataUpdateFormComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forChild(routes)
      ],
      exports:[CommonModule,DataUpdateFormComponent]
  })
export class DataUpddateFormModule { }
