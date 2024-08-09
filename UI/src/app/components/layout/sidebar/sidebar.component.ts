import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggle() {
    this.sidenav.toggle();
  }

  menus: any[] = [];
  userRole: any = '';
  constructor(private menuService: MenusService, private router: Router) {}

  ngOnInit(): void {
    this.setMenus();
    this.userRole = 'User';
  }

  setMenus() {
    this.menuService.getMenus().subscribe(
      (response: any) => {
        if (response.status === 200) {
          this.menus = response.data;
        }
      },
      (error) => {
        this.router.navigate(['/']);
        localStorage.clear();
      }
    );
  }

  getRouterLink(item: any) {
    return '/user/' + item.Route;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
