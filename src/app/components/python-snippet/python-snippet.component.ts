import { AfterViewInit, Component, Input } from '@angular/core';

declare var Prism: any;

@Component({
  selector: 'app-python-snippet',
  imports: [],
  templateUrl: './python-snippet.component.html',
  styleUrl: './python-snippet.component.scss'
})
export class PythonSnippetComponent implements AfterViewInit {
  @Input() code = '';

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}