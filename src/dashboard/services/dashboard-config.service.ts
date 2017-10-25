import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface DashboardConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBarBreakpoint?: number,
  socialIcons?: Array<IconFiles>
}

@Injectable()
export class DashboardConfigService {

 showUserControls = true;
 showStatusBar = true;
 showStatusBarBreakpoint = 0;
 socialIcons = new Array<IconFiles>();

 configure(settings: DashboardConfigSettings) : void {
   Object.assign(this, settings);
 }
}
