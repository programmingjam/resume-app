import { Component, OnInit } from '@angular/core';
import { DashboardConfigService } from '../services/dashboard-config.service';

@Component({
  selector: 'db-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public dashboardConfigService: DashboardConfigService) { }

  ngOnInit() {
  }

}
