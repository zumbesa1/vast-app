import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOffcanvas]'
})
export class OffcanvasDirective {  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.offcanvas-open') isOpen = false;

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    event.preventDefault();
    const offcanvas = document.querySelector(this.elementRef.nativeElement.dataset.bsTarget);
    this.isOpen = offcanvas.classList.toggle('show');
    event.stopPropagation();
  }


  @HostListener('window:click', ['$event']) onWindowClick(event: MouseEvent) {
    const offcanvas = document.querySelector(this.elementRef.nativeElement.dataset.bsTarget);
    const isClickWithinOffcanvas = offcanvas.contains(event.target as Node);
    if (!isClickWithinOffcanvas && this.isOpen) {
      this.isOpen = false;
      this.isOpen = offcanvas.classList.toggle('show');
    }
  }
}