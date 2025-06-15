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

Chart.register(...registerables, zoomPlugin);

@Component({
  selector: 'app-yolo-cls',
  standalone: true,
  imports: [SlideshowSectionComponent, ChartModule, TableModule],
  templateUrl: './yolo-cls.component.html',
  styleUrls: ['../slide-main-styles.scss', './yolo-cls.component.scss']
})
export class YoloClsComponent implements AfterViewInit {
  @ViewChild('myChart', { read: ElementRef }) chartRef!: ElementRef;

  chartData: any;
  chartOptions: any;

  users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 34 },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', age: 22 },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', age: 31 },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', age: 39 }
  ];

  ngOnInit() {
    this.chartData = {
      datasets: [
        {
          label: 'Signal',
          data: [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 16 },
            { x: 5, y: 25 },
          ],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.3,
          showLine: true
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Zoomable Chart with Double-Click Reset'
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
            text: 'X Axis'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Y Axis'
          }
        }
      }
    };
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
