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
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-keras-cls',
  standalone: true,
  imports: [SlideshowSectionComponent, ChartModule, TableModule, HttpClientModule, ImageCompareModule, SelectButtonModule, FormsModule, ButtonModule],
  templateUrl: './keras-cls.component.html',
  styleUrls: ['../slide-main-styles.scss', './keras-cls.component.scss']
})
export class KerasClsComponent {

  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild('clsChart') clsChart!: PrimeNGChart;
  @ViewChild('clsCropChart') clsCropChart!: PrimeNGChart;
  @ViewChild('clsTfBase') clsTfBase!: PrimeNGChart;
  @ViewChild('clsStageChart') clsStageChart!: PrimeNGChart;

  clsChartData!: ChartData;
  clsCropChartData!: ChartData;
  clsTlBaseChartData!: ChartData;
  clsTlStage89ChartData!: ChartData;
  clsTlStage67ChartData!: ChartData;

  clsChartOptions: any;

  stageOptions: any[] = [{ label: 'Stage 8-9', value: 'stage89' }, { label: 'Stage 6-7', value: 'stage67' }];

  selectedStage: string = this.stageOptions[0].value;

  stage89Accuracy = 96.64;
  stage67Accuracy = 98.6;

  stage89Time = 45.65;
  stage67Time = 46.13; 

  clsTableData = [
    { class: 'Defective', precision: 1.0000, recall: 1.0000, f1: 1.0000, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 1.0000, f1: 1.0000, support: 262 }
  ];

  clsCropTableData = [
    { class: 'Defective', precision: 1.0000, recall: 1.0000, f1: 1.0000, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 1.0000, f1: 1.0000, support: 262 }
  ];

  clsBaseTableData = [
    { class: 'Defective', precision: 0.9729, recall: 0.9514, f1: 0.9621, support: 453 },
    { class: 'Ok', precision: 0.9191, recall: 0.9542, f1: 0.9363, support: 262 }
  ];

  stage67TableData = [
    { class: 'Defective', precision: 0.9799, recall: 0.9669, f1: 0.9733, support: 453 },
    { class: 'Ok', precision: 0.9440, recall: 0.9656, f1: 0.9547, support: 262 }
  ];

  stage89TableData = [
    { class: 'Defective', precision: 0.9868, recall: 0.9912, f1: 0.9890, support: 453 },
    { class: 'Ok', precision: 0.9846, recall: 0.9771, f1: 0.9888, support: 262 }
  ];

  tlTableData = [
    { stage: 0, maxd: 6.104e-5, meand: 1.060e-6 },
    { stage: 1, maxd: 2.136e-4, meand: 5.857e-6 },
    { stage: 2, maxd: 2.337e-5, meand: 5.771e-7 },
    { stage: 3, maxd: 1.907e-5, meand: 4.075e-7 },
    { stage: 4, maxd: 1.526e-5, meand: 2.685e-7 },
    { stage: 5, maxd: 2.670e-5, meand: 4.729e-7 },
    { stage: 6, maxd: 1.812e-5, meand: 3.931e-7 },
    { stage: 7, maxd: 6.676e-5, meand: 7.712e-7 },
    { stage: 8, maxd: 3.052e-5, meand: 6.965e-7 },
    { stage: 9, maxd: 7.153e-6, meand: 2.883e-7 }
  ];

  currentStageAccuracy = this.stage89Accuracy;
  currentStageInferenceTime = this.stage89Time;
  currentStageChartData = this.clsTlStage89ChartData;
  currentStageTableData = this.stage89TableData;

  updateDisplay() {
    this.resetZoomTfStages()
    if (this.selectedStage === 'stage89') {
      this.currentStageChartData = this.clsTlStage89ChartData;
      this.currentStageTableData = this.stage89TableData;
 this.currentStageAccuracy = this.stage89Accuracy;
  this.currentStageInferenceTime = this.stage89Time;
    } else {
      this.currentStageChartData = this.clsTlStage67ChartData;
      this.currentStageTableData = this.stage67TableData;
      this.currentStageAccuracy = this.stage67Accuracy;
      this.currentStageInferenceTime = this.stage67Time;
    }
  }

  ngOnChanges() {
    this.updateDisplay();
  }

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

  resetZoomTfBase() {
    const chartJsInstance = this.clsTfBase?.chart;
    if (chartJsInstance) {
      chartJsInstance.resetZoom();
    }
  }

  resetZoomTfStages() {
    const chartJsInstance = this.clsStageChart?.chart;
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

    this.http.get<ChartData>('assets/data/keras-cls-tl_base-results.json').subscribe(data => {
      this.clsTlBaseChartData = data;
    });

    this.http.get<ChartData>('assets/data/keras-cls-tl_89-results.json').subscribe(data => {
      this.clsTlStage89ChartData = data;
      this.updateDisplay(); // Workaround: wait for data to be fetched, then update displays.
    });

    this.http.get<ChartData>('assets/data/keras-cls-tl_67-results.json').subscribe(data => {
      this.clsTlStage67ChartData = data;
    });


    this.updateDisplay()
  }

  formatScientific(val: number): string {
    return val.toExponential(2); 
  }



}
