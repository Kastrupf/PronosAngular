import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './competition.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  { path: 'competitions', canActivate: [AuthGuard], component: CompetitionComponent }
];

@NgModule({
  declarations: [CompetitionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class CompetitionModule { }
