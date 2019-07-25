import { HttpClientModule } from '@angular/common/http';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';


const routes: Routes = [
  { path: 'players/form', canActivate: [AuthGuard], component: DataFormComponent }
];


@NgModule({
  declarations: [DataFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
    ],
    exports:[CommonModule,DataFormComponent]
})
export class DataFormModule { }
