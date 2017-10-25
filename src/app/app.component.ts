import { Component } from '@angular/core';
import { DashboardConfigService, DashboardConfigSettings } from '../dashboard/services/dashboard-config.service';
import { MenuService } from '../dashboard/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dashboardConfigService: DashboardConfigService,
              private menuService: MenuService) {

    let config:DashboardConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/images/linkedin.png', alt: "linkedin", link: 'https://www.linkedin.com/in/jimmcquarrie/'},
        { imageFile: 'assets/images/github.png', alt: "github", link: 'https://github.com/programmingjam'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    dashboardConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
