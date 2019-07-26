
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { PlayersComponent } from './players.component';
import { MaterialModule } from '../material/material.module';
import {MatDialogModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormModule } from './data-form/data-form.module';
import { DataUpddateFormModule } from './data-update-form/data-upddate-form.module';

const routes: Routes = [
  { path: 'players', canActivate: [AuthGuard], component: PlayersComponent }
];

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DataFormModule,
    DataUpddateFormModule,    
    HttpClientModule,    
    MatDialogModule,
    RouterModule.forChild(routes)

  ],
  exports:[CommonModule,PlayersComponent]
})

export class PlayersModule { }
