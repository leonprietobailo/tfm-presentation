import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { UIChart as PrimeNGChart , ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { SlideshowSectionComponent } from '../../components/slideshow-section/slideshow-section.component';

import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartData } from '../../models/chart-data-model';
import { Router } from '@angular/router';


Chart.register(...registerables, zoomPlugin);

@Component({
  selector: 'app-yolo-cls',
  standalone: true,
  imports: [SlideshowSectionComponent, ChartModule, TableModule, HttpClientModule],
  templateUrl: './yolo-cls.component.html',
  styleUrls: ['../slide-main-styles.scss', './yolo-cls.component.scss']
})
export class YoloClsComponent implements AfterViewInit {
  @ViewChild('clsChart') clsChart!: PrimeNGChart;
  @ViewChild('segChart1') segChart1!: PrimeNGChart;
  @ViewChild('segChart2') segChart2!: PrimeNGChart;

  resetZoomCls() {
    const chartJsInstance = this.clsChart?.chart;
    if (chartJsInstance) {
      chartJsInstance.resetZoom();
    }
  }

  resetZoomSeg1() {
    const chartJsInstance = this.segChart1?.chart;
    if (chartJsInstance) {
      chartJsInstance.resetZoom();
    }
  }

  resetZoomSeg2() {
    const chartJsInstance = this.segChart2?.chart;
    if (chartJsInstance) {
      chartJsInstance.resetZoom();
    }
  }

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('myChart', { read: ElementRef }) chartRef!: ElementRef;

  chartOptions: any;
  chartOptionsSeg1: any;

  users = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962, f1: 0.9981, support:262 }
  ];

  seg1 = [
    { miou: 0.9849, dice: 0.9924, inference_time: 9.3669 }
    ];

  chartData!: ChartData;
  chartDataSeg1!: ChartData;
  // chartDataSeg2!: ChartData;

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

    this.chartOptionsSeg1 = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Training and Validation Segmentation Losses vs Training Epochs',
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

    this.http.get<ChartData>('assets/data/yolo-seg-1-results.json').subscribe(data => {
      this.chartDataSeg1 = data;
    });

  }

   ngAfterViewInit() {
  //   const tryAttach = (attemptsLeft = 10) => {
  //     const canvas = this.chartRef?.nativeElement?.querySelector('canvas') as HTMLCanvasElement | null;
  //     if (canvas) {
  //       canvas.addEventListener('dblclick', () => {
  //         const chart = Chart.getChart(canvas);
  //         chart?.resetZoom();
  //       });
  //     } else if (attemptsLeft > 0) {
  //       setTimeout(() => tryAttach(attemptsLeft - 1), 100);
  //     } else {
  //       console.warn('Canvas not found after multiple attempts.');
  //     }
  //   };
  //   tryAttach();
  }

  goNext() {
    this.router.navigate(['keras']);
  }
}
