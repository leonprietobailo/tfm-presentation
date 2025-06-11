import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { HomeComponent } from './pages/home/home.component';
import { YoloClsComponent } from './pages/yolo-cls/yolo-cls.component';
import { YoloSegComponent } from './pages/yolo-seg/yolo-seg.component';
import { KerasClsComponent } from './pages/keras-cls/keras-cls.component';
import { KerasCropComponent } from './pages/keras-crop/keras-crop.component';
import { KerasBackboneComponent } from './pages/keras-backbone/keras-backbone.component';
import { GradcamComponent } from './pages/gradcam/gradcam.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'introduction', component: IntroductionComponent },
  { path: 'yolo_cls', component: YoloClsComponent },
  { path: 'yolo_seg', component: YoloSegComponent },
  { path: 'keras_cls', component: KerasClsComponent },
  { path: 'keras_crop', component: KerasCropComponent },
  { path: 'keras_backbone', component: KerasBackboneComponent },
  { path: 'gradcam', component: GradcamComponent },
  { path: 'conclusion', component: ConclusionComponent }
];


// { label: 'Introduction', routerLink: '/introduction' },
// { label: 'YOLO Classification', routerLink: '/yolov8-classification' },
// { label: 'YOLO Segmentation', routerLink: '/yolov8-segmentation' },
// { label: 'Keras Classification', routerLink: '/keras-classification' },
// { label: 'Keras Classification + Crop', routerLink: '/yolov8-segmentation-crop' },
// { label: 'Keras Classification + Backbone', routerLink: '/yolov8-backbone' },
// { label: 'GradCAM', routerLink: '/yolov8-backbone' },
// { label: 'Conclusion', routerLink: '/conclusion' }