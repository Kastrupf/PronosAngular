import { AlertModalComponent } from './modals/alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations:
    [NavmenuComponent, FooterComponent, AlertModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [CommonModule, NavmenuComponent, FooterComponent, AlertModalComponent]
})

export class SharedModule { }