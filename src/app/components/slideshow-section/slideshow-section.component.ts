import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  HostBinding,
  AfterContentInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-slideshow-section',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './slideshow-section.component.html',
  styleUrls: ['./slideshow-section.component.scss']
})
export class SlideshowSectionComponent implements AfterContentInit {
  currentSlide = 0;
  slides: TemplateRef<any>[] = [];

  @ContentChildren(TemplateRef) slideTemplates!: QueryList<TemplateRef<any>>;

  @HostBinding('style.--current-slide')
  get currentSlideIndex(): string {
    return this.currentSlide.toString();
  }

  ngAfterContentInit(): void {
    this.slides = this.slideTemplates.toArray();
  }

  goTo(index: number) {
  this.currentSlide = index;
}


  next() {
    if (this.currentSlide < this.slides.length - 1) this.currentSlide++;
  }

  prev() {
    if (this.currentSlide > 0) this.currentSlide--;
  }
}
