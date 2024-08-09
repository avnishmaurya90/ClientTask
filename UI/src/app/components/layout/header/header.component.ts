import { Component, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  user: any;
  constructor() { }

  ngOnInit(): void {
    this.setName();
  }

  setName() {
    if (typeof localStorage !== 'undefined') {
      const nameData = localStorage.getItem('User');
      if (nameData) {
        this.user = JSON.parse(nameData);
      }
    }
  }
}
