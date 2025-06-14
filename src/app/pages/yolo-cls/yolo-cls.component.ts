import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { SlideshowSectionComponent } from '../../components/slideshow-section/slideshow-section.component';

import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartData } from '../../models/chart-data-model';


Chart.register(...registerables, zoomPlugin);

@Component({
  selector: 'app-yolo-cls',
  standalone: true,
  imports: [SlideshowSectionComponent, ChartModule, TableModule, HttpClientModule],
  templateUrl: './yolo-cls.component.html',
  styleUrls: ['../slide-main-styles.scss', './yolo-cls.component.scss']
})
export class YoloClsComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  @ViewChild('myChart', { read: ElementRef }) chartRef!: ElementRef;

  chartOptions: any;

  users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 34 },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', age: 22 },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', age: 31 },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', age: 39 }
  ];

  chartData!: ChartData;

  ngOnInit() {
    this.chartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Training and Validation Losses vs Training Epochs',
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

    this.http.get<ChartData>('assets/data/yolo-cls-results.json').subscribe(data => {
      this.chartData = data;
    });
  }

  ngAfterViewInit() {
    const tryAttach = (attemptsLeft = 10) => {
      const canvas = this.chartRef?.nativeElement?.querySelector('canvas') as HTMLCanvasElement | null;
      if (canvas) {
        canvas.addEventListener('dblclick', () => {
          const chart = Chart.getChart(canvas);
          chart?.resetZoom();
        });
      } else if (attemptsLeft > 0) {
        setTimeout(() => tryAttach(attemptsLeft - 1), 100);
      } else {
        console.warn('Canvas not found after multiple attempts.');
      }
    };
    tryAttach();
  }
}
