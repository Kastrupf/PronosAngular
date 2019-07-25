import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '404',canActivate: [AuthGuard], component: ErrorsComponent },
      { path: '**', redirectTo: '/404'}
      ])
  ]
})
export class ErrorsModule { }