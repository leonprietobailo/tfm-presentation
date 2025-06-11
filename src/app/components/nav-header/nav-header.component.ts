import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterModule, StepsModule],
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavHeaderComponent {

  constructor(private router: Router) { }

  items: MenuItem[] = [
    // { label: 'Home', routerLink: '/home' },
    { label: 'Introduction', routerLink: '/introduction' },
    { label: 'YOLO Classification', routerLink: '/yolo_cls' },
    { label: 'YOLO Segmentation', routerLink: '/yolo_seg' },
    { label: 'Keras Classification', routerLink: '/keras_cls' },
    { label: 'Keras Classification + Crop', routerLink: '/keras_crop' },
    { label: 'Keras Classification + Backbone', routerLink: '/keras_backbone' },
    { label: 'GradCAM', routerLink: '/gradcam' },
    { label: 'Conclusion', routerLink: '/conclusion' }
  ];

  goHome() {
    this.router.navigate(['']);
  }

}

// export const routes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'introduction', component: IntroductionComponent },
//   { path: 'yolo_cls', component: YoloClsComponent },
//   { path: 'yolo_seg', component: YoloSegComponent },
//   { path: 'keras_cls', component: KerasClsComponent },
//   { path: 'keras_crop', component: KerasCropComponent },
//   { path: 'keras_backbone', component: KerasBackboneComponent },
//   { path: 'gradcam', component: GradcamComponent },
//   { path: 'conclusion', component: ConclusionComponent }
// ];
