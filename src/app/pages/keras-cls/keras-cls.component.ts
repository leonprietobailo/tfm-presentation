import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { UIChart as PrimeNGChart, ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { SlideshowSectionComponent } from '../../components/slideshow-section/slideshow-section.component';

import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartData } from '../../models/chart-data-model';
import { Router } from '@angular/router';
import { ImageCompareModule } from 'primeng/imagecompare';



@Component({
  selector: 'app-keras-cls',
  imports: [SlideshowSectionComponent, ChartModule, TableModule, HttpClientModule, ImageCompareModule],
  templateUrl: './keras-cls.component.html',
  styleUrls: ['../slide-main-styles.scss', './keras-cls.component.scss']
})
export class KerasClsComponent    {

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('clsChart') clsChart!: PrimeNGChart;
  @ViewChild('clsCropChart') clsCropChart!: PrimeNGChart;

  clsChartData!: ChartData;
  clsCropChartData!: ChartData;

  clsChartOptions: any;

  clsTableData = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962, f1: 0.9981, support: 262 }
  ];

  clsCropTableData = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962, f1: 0.9981, support: 262 }
  ];

  resetZoomCls() {
    const chartJsInstance = this.clsChart?.chart;
    if (chartJsInstance) {
      chartJsInstance.resetZoom();
    }
  }

  resetZoomClsCrop() {
    const chartJsInstance = this.clsCropChart?.chart;
    if (chartJsInstance) {
      chartJsInstance.resetZoom();
    }
  }

  ngOnInit() {

    this.clsChartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Training and Validation Losses vs Epochs',
        },
        zoom: {
          zoom: {
            drag: {
              enabled: true
            },
            mode: 'x'
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Epochs'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Loss'
          }
        }
      }
    };

    this.http.get<ChartData>('assets/data/keras-cls-results.json').subscribe(data => {
      this.clsChartData = data;
    });

    this.http.get<ChartData>('assets/data/keras-cls-crop-results.json').subscribe(data => {
      this.clsCropChartData = data;
    });


  }



}
