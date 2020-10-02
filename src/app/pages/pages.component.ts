import { Component, OnInit } from '@angular/core';
import { EmployeePinService } from './services/employee-pinner.service';
import { Client, Employee } from "@api/api";
import { MENU_ITEMS, PINNED_EMPLOYEES_MENU_ITEMS } from './pages-menu';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor(private employeePinService: EmployeePinService) {
    this.employeePinService.employeePinAddEvent.subscribe({
      next: (_) => {
        this.loadEmployeeMenu();
      },
    });
    this.employeePinService.employeePinRemoveEvent.subscribe({
      next: (_) => {
        this.loadEmployeeMenu();
      },
    });
  }
  ngOnInit(): void {
    this.loadEmployeeMenu();
  }
  loadEmployeeMenu() {
    let menuItems = this.employeePinService.getPinnedEmployees().map(item => this.createMenuItem(item));
    if (menuItems.length === 0) {
      menuItems = null;
    }
    PINNED_EMPLOYEES_MENU_ITEMS.hidden = (menuItems == null);
    PINNED_EMPLOYEES_MENU_ITEMS.children = menuItems;
    this.menu = MENU_ITEMS;
  }
  createMenuItem(e: Employee) {
    return {
      title: e.firstName + ' ' + e.lastName,
      icon: 'person-outline',
      link: '/pages/employees/employee/' + e.id,
    };
  }
}
