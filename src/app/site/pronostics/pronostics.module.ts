import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PronosticsComponent } from './pronostics.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ClassementModule } from '../classement/classement.module';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { MyModalComponent } from './my-modal/my-modal.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'pronostics', canActivate: [AuthGuard],component :PronosticsComponent},
  { path: 'mymodal' , canActivate: [AuthGuard],component :MyModalComponent}
];
@NgModule({
  declarations: [PronosticsComponent, MyModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ClassementModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PronosticsModule { }