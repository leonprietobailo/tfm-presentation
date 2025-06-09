import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow-section',
  templateUrl: './slideshow-section.component.html',
  styleUrls: ['./slideshow-section.component.scss'],
  standalone: true
})
export class SlideshowSectionComponent {
  slides = Array(3).fill(null);  // You can customize this to dynamically create slides
  currentSlide = 0;

  next() {
    if (this.currentSlide < this.slides.length - 1) this.currentSlide++;
  }

  prev() {
    if (this.currentSlide > 0) this.currentSlide--;
  }
}
