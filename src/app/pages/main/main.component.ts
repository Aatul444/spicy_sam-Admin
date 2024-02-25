import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../../services/menu-service.service';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  menuItems: any = [];

  constructor(private menuItemService: MenuServiceService) {}
  
  ngOnInit(): void {
    // this.menuItemService.getMenuItems().subscribe((res) => {
    //   this.menuItems = res;
    //   console.log(this.menuItems)
    // });
  }
}
