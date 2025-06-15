import { Component } from '@angular/core';
import { SlideshowSectionComponent } from "../../components/slideshow-section/slideshow-section.component";
import { PythonSnippetComponent } from "../../components/python-snippet/python-snippet.component";
import dedent from 'ts-dedent';
import { TreeTableComponent } from "../../components/tree-table/tree-table.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dataset',
  imports: [SlideshowSectionComponent, TreeTableComponent],
  templateUrl: './dataset.component.html',
  styleUrls: ['../slide-main-styles.scss', './dataset.component.scss']
})
export class DatasetComponent {

  constructor(private router: Router) { }

  goNext() {
    this.router.navigate(['yolo_cls']);
  }
}

