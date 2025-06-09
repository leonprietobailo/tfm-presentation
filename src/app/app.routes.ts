import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';

export const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  // otras rutas...
];