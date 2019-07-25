import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'admin',canActivate: [AuthGuard], component: AdminComponent }
      ])
  ]
})
export class AdminModule { }
