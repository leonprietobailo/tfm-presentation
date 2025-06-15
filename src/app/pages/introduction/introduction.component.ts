import { Component } from '@angular/core';
import { SlideshowSectionComponent } from "../../components/slideshow-section/slideshow-section.component";
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-introduction',
  imports: [SlideshowSectionComponent],
  templateUrl: './introduction.component.html',
  styleUrl: '../slide-main-styles.scss'
})
export class IntroductionComponent {
  constructor(private router: Router) { }

  goNext() {
    this.router.navigate(['dataset']);
  }

}
