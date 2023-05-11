import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOffcanvas]'
})
export class OffcanvasDirective {

  @HostBinding('class.show') isOpen = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    const offcanvas = document.querySelector(this.elementRef.nativeElement.dataset.bsTarget);
    console.log(offcanvas);
    if (offcanvas) {
      if (target.classList.contains('navbar-toggler')) {
        this.isOpen = !this.isOpen;
        console.log('navbar-toggler' + this.isOpen);
      } else if (target.classList.contains('btn-close')) {
        this.isOpen = false;
        console.log('btn-close' + this.isOpen);
      } else {
        this.isOpen = false;
        console.log('no Targed found' + this.isOpen);
      }
      offcanvas.classList.toggle('show', this.isOpen);
    }
  }











  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    const offcanvas = document.querySelector(this.elementRef.nativeElement.dataset.bsTarget);
    if (offcanvas && this.isOpen && !offcanvas.contains(target) && !target.classList.contains('navbar-toggler')) {
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.dispatchEvent(new Event('click'));
      }
    }
  }
}