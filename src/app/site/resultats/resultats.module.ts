import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultatsComponent } from './resultats.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ClassementModule } from '../classement/classement.module';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

const routes: Routes = [
  { path: 'resultats', canActivate: [AuthGuard],component :ResultatsComponent}
];

@NgModule({
  declarations: [ResultatsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ClassementModule,
    RouterModule.forChild(routes)
  ]
})
export class ResultatsModule { }