import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoomOnHover]',
  standalone: true
})
export class ZoomOnHoverDirective {

  @Input() zoomScale = 2;

  @HostListener('mousemove', ['$event'])
  handleMove(event: MouseEvent): void {
    const el = event.target as HTMLElement;
    const r  = el.getBoundingClientRect();
    const xPct = ((event.clientX - r.left)  / r.width ) * 100;
    const yPct = ((event.clientY - r.top )  / r.height) * 100;

    el.style.transformOrigin = `${xPct}% ${yPct}%`;
    el.style.transform       = `scale(${this.zoomScale})`;
  }

  @HostListener('mouseleave', ['$event.target'])
  reset(el: HTMLElement): void {
    el.style.transform       = 'scale(1)';
    el.style.transformOrigin = 'center center';
  }
}
