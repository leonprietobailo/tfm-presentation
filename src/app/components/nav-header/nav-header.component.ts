import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  items: MenuItem[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Introduction', routerLink: '/introduction' },
    { label: 'YOLO Classification', routerLink: '/yolov8-classification' },
    { label: 'YOLO Segmentation', routerLink: '/yolov8-segmentation' },
    { label: 'Keras Classification', routerLink: '/keras-classification' },
    { label: 'Keras Classification + Crop', routerLink: '/yolov8-segmentation-crop' },
    { label: 'Keras Classification + Backbone', routerLink: '/yolov8-backbone' },
    { label: 'GradCAM', routerLink: '/yolov8-backbone' },
    { label: 'Conclusion', routerLink: '/conclusion' }
  ];

    @ViewChild('lottiePlayer', { static: true }) lottiePlayer!: ElementRef;

  direction: 1 | -1 = 1;

  ngAfterViewInit() {
    const el = this.lottiePlayer.nativeElement;

    el.addEventListener('ready', () => {
      el.direction = 1;
      el.play();
    });

    el.addEventListener('complete', () => {
      this.direction *= -1;
      el.direction = this.direction;
      el.play();
    });
  }
}