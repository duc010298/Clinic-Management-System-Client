import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NotifyDialogComponent } from './dialog/notify-dialog/notify-dialog.component';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    NotifyDialogComponent,
    SpinnerLoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotifyDialogComponent,
    SpinnerLoaderComponent,
    SidebarComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
