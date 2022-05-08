import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMobileMenu = false;

  constructor() {}

  ngOnInit(): void {}

  openMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
