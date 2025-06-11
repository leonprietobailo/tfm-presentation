import { Component } from '@angular/core';
import { AppTopbar } from './components/app.topbar';
import { StatsWidget } from "./components/dashboard/statswidget";
import { SalesTrendWidget } from "./components/dashboard/salestrendwidget";
import { RecentActivityWidget } from "./components/dashboard/recentactivitywidget";
import { ProductOverviewWidget } from "./components/dashboard/productoverviewwidget";
import { AppFooter } from "./components/app.footer";
import { NavHeaderComponent } from "./components/nav-header/nav-header.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { slideFadeAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  imports: [NavHeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideFadeAnimation]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
