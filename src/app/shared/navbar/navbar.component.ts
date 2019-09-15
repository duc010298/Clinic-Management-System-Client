import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggle = false;
  @Output() onMenuToggle = new EventEmitter<boolean>();

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  logout() {
    this.authenticationService.logout();
  }

  toggleMenu() {
    this.toggle = !this.toggle;
    this.onMenuToggle.emit(this.toggle);
  }

}
