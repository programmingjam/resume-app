import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { DashboardConfigService } from './services/dashboard-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardBodyComponent
  ],
  providers: [
    DashboardConfigService,
    ScreenService,
    MenuService
  ],
  declarations: [
    DashboardBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class DashboardModule {
}
