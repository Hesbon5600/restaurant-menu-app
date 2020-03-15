import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../__services__/menu-data.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuData: Array<any>;

  constructor(private menuDataService: MenuDataService) { }

  ngOnInit() {
    this.getMenuData();
  }

  getMenuData() {
    this.menuDataService.getMenuData().subscribe(menuData => {
      this.menuData = menuData;
    })
  }



}
