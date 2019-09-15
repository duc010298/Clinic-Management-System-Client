import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toggle = false;

  constructor() { }

  ngOnInit() {
  }

  sideBarToggle(toggle: boolean) {
    this.toggle = toggle;
  }
}
