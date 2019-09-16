import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NotifyDialogComponent } from './dialog/notify-dialog/notify-dialog.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    NotifyDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotifyDialogComponent,
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
