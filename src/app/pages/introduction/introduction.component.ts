import { Component } from '@angular/core';
import { SlideshowSectionComponent } from "../../components/slideshow-section/slideshow-section.component";

@Component({
  standalone: true,
  selector: 'app-introduction',
  imports: [SlideshowSectionComponent],
  templateUrl: './introduction.component.html',
  styleUrl: '../slide-main-styles.scss'
})
export class IntroductionComponent {
 currentSlide = 0;
}
