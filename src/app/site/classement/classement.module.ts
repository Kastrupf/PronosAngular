import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassementComponent } from './classement.component';
import { MaterialModule } from '../material/material.module';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'classements', canActivate: [AuthGuard], component: ClassementComponent }
];

@NgModule({
  declarations: [ClassementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)

  ],
  exports:[CommonModule,ClassementComponent]
})
export class ClassementModule { }
