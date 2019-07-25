import { PlayersService } from './services/players/players.service';
import { ContestModule } from './site/contest/contest.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './site/home/home.module';
import { PronosticsModule } from './site/pronostics/pronostics.module';
import { ResultatsModule } from './site/resultats/resultats.module';
import { AdminModule } from './site/admin/admin.module';
import { ErrorsModule } from './site/errors/errors.module';
import { SharedModule } from './site/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './site/material/material.module';
import { LoginModule } from './site/login/login.module';

import { CustomMaterialModule } from './site/custom-material/custom-material.module';
import { ConfirmDialogComponent } from './site/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { LOCALE_ID } from '@angular/core';
import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PlayersModule } from './site/players/players.module';
import { EvenementsModule } from './site/evenements/evenements.module';

registerLocaleData(fr);
@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    LoginModule,
    SharedModule,
    MatDialogModule,
    HomeModule,
    PronosticsModule,
    ResultatsModule,
    AdminModule,
    PlayersModule,
    EvenementsModule,
    ContestModule,
    ErrorsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "fr-CA"}, PlayersService],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
