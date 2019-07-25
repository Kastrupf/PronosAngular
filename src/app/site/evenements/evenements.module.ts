import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenementsComponent } from './evenements.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  { path: 'evenements', canActivate: [AuthGuard], component: EvenementsComponent }
];

@NgModule({
  declarations: [EvenementsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[CommonModule,EvenementsComponent]
})
export class EvenementsModule { }
