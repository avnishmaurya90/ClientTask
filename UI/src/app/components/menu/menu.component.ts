import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menus.service';

interface menusItem {
  id: number;
  MenuName: string;
  ParentMenuName: string;
  Route: string;
  MenuIcon: string;
  IsActive: string
  serialNumber?: number;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  message: string = ''
  menu !: menusItem[];
  dataSource: any;

  constructor(private menusService: MenusService) { }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.menusService.getMenus().subscribe(
      (response: any) => {
        this.menu = response.data;
      },
      (error) => {
        console.error('Error fetching menu:', error);
      }
    );
  }
}
