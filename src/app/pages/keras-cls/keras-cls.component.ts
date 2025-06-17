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


@Component({
  selector: 'app-keras-cls',
  standalone: true,
  imports: [SlideshowSectionComponent, ChartModule, TableModule, HttpClientModule, ImageCompareModule, SelectButtonModule, FormsModule],
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


  stage67TableData = [
    { class: 'ASD', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'ASD', precision: 1.0000, recall: 0.9962, f1: 0.9981, support: 262 }
  ];
  stage89TableData = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962, f1: 0.9981, support: 262 }
  ];

  clsTableData = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962, f1: 0.9981, support: 262 }
  ];

  clsCropTableData = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962, f1: 0.9981, support: 262 }
  ];

  clsBaseTableData = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000, f1: 0.9989, support: 453 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962, f1: 0.9981, support: 262 }
  ];

  tlTableData = [
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Defective', precision: 0.9978, recall: 1.0000 },
    { class: 'Ok', precision: 1.0000, recall: 0.9962 }
  ];

  currentStageChartData = this.clsTlStage89ChartData;
  currentStageTableData = this.stage89TableData;

  updateDisplay() {
    if (this.selectedStage === 'stage89') {
      this.currentStageChartData = this.clsTlStage89ChartData;
      this.currentStageTableData = this.stage89TableData;
    } else {
      this.currentStageChartData = this.clsTlStage67ChartData;
      this.currentStageTableData = this.stage67TableData;
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




}
