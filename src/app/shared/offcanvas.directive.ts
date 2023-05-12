import { Directive, ElementRef, HostBinding, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appOffcanvas]'
})
export class OffcanvasDirective implements OnInit, OnDestroy {
  @HostBinding('class.offcanvas-open') isOpen = false;

  private clickSubscription!: Subscription;
  private windowClickSubscription!: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const nativeElement = this.elementRef.nativeElement; 
    const offcanvas = document.querySelector(nativeElement.dataset.bsTarget);

    this.clickSubscription = fromEvent<Event>(nativeElement, 'click')
      .subscribe((event: Event) => {
        event.preventDefault();
        this.isOpen = offcanvas.classList.toggle('show');
        console.log('click');
        event.stopPropagation();
      });

    this.windowClickSubscription = fromEvent(window, 'click')
      .subscribe((event: Event) => {
        const isClickWithinOffcanvas = offcanvas.contains(event.target as Node);
        if (!isClickWithinOffcanvas && this.isOpen) {
          this.isOpen = false;
          console.log('windowclick');
          this.isOpen = offcanvas.classList.toggle('show');
        }
      });
  }

  ngOnDestroy() {
    this.clickSubscription.unsubscribe();
    this.windowClickSubscription.unsubscribe();
  }
}