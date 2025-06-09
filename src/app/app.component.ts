import { Component } from '@angular/core';
import { AppTopbar } from './components/app.topbar';
import { StatsWidget } from "./components/dashboard/statswidget";
import { SalesTrendWidget } from "./components/dashboard/salestrendwidget";
import { RecentActivityWidget } from "./components/dashboard/recentactivitywidget";
import { ProductOverviewWidget } from "./components/dashboard/productoverviewwidget";
import { AppFooter } from "./components/app.footer";
import { NavHeaderComponent } from "./components/nav-header/nav-header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavHeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
