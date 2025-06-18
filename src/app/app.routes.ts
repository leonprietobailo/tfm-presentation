import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { HomeComponent } from './pages/home/home.component';
import { YoloClsComponent } from './pages/yolo-cls/yolo-cls.component';
import { KerasClsComponent } from './pages/keras-cls/keras-cls.component';
import { GradcamComponent } from './pages/gradcam/gradcam.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';
import { DatasetComponent } from './pages/dataset/dataset.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'home'}},
  { path: 'introduction', component: IntroductionComponent, data: {animation: 'introduction'} },
  { path: 'dataset', component: DatasetComponent, data: {animation: 'dataset'} },
  { path: 'yolo', component: YoloClsComponent, data: {animation: 'yolo'} },
  { path: 'keras', component: KerasClsComponent, data: {animation: 'keras'} },
  { path: 'gradcam', component: GradcamComponent, data: {animation: 'gradcam'}},
  { path: 'conclusion', component: ConclusionComponent, data: {animation: 'conclusion'} }
];


// { label: 'Introduction', routerLink: '/introduction' },
// { label: 'YOLO Classification', routerLink: '/yolov8-classification' },
// { label: 'YOLO Segmentation', routerLink: '/yolov8-segmentation' },
// { label: 'Keras Classification', routerLink: '/keras-classification' },
// { label: 'Keras Classification + Crop', routerLink: '/yolov8-segmentation-crop' },
// { label: 'Keras Classification + Backbone', routerLink: '/yolov8-backbone' },
// { label: 'GradCAM', routerLink: '/yolov8-backbone' },
// { label: 'Conclusion', routerLink: '/conclusion' }