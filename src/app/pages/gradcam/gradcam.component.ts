import { Component } from '@angular/core';
import { SlideshowSectionComponent } from "../../components/slideshow-section/slideshow-section.component";
import { ImageCompareModule } from 'primeng/imagecompare';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-gradcam',
  imports: [SlideshowSectionComponent, ImageCompareModule, SelectButtonModule, FormsModule],
  templateUrl: './gradcam.component.html',
  styleUrls: ['../slide-main-styles.scss', './gradcam.component.scss'],
})
export class GradcamComponent {
  
  stateOptions: any[] = [{ label: 'Original', value: 'original' },{ label: 'GradCAM', value: 'gradcam' }];

  originalImages: string[] = [
    'assets/images/gradcam/comparison/cast_def_0_7.jpeg',
    'assets/images/gradcam/comparison/cast_def_0_149.jpeg',
    'assets/images/gradcam/comparison/cast_def_0_157.jpeg',
    'assets/images/gradcam/comparison/cast_def_0_290.jpeg'
  ];
  
  gradcamImages: string[] = [
    'assets/images/gradcam/comparison/evident_casting_data_test_cast_def_0_7.jpeg',
    'assets/images/gradcam/comparison/evident_casting_data_test_cast_def_0_149.jpeg',
    'assets/images/gradcam/comparison/evident_casting_data_test_cast_def_0_157.jpeg',
    'assets/images/gradcam/comparison/evident_casting_data_test_cast_def_0_290.jpeg'
  ];
  
  displayedImages: string[] = [...this.originalImages];
  imagesVisible = true;
  
  set value(val: 'original' | 'gradcam') {
    this._value = val;
    this.switchImages(val);
  }
  get value() {
    return this._value;
  }
  private _value: 'original' | 'gradcam' = 'original';
  
  switchImages(type: 'original' | 'gradcam') {
    this.displayedImages =
      type === 'original' ? this.originalImages : this.gradcamImages;
  }

}

