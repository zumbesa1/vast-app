import { Directive, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";

@Directive({
  selector: '[appDropdown]'
})


export class DropdownDirective implements OnInit, OnDestroy{
  @HostBinding('class.show') isOpen = false;
  private clickSubscription!: Subscription;
  private documentClickSubscription!: Subscription;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    const nativeElement = this.elementRef.nativeElement;
    const dropdown = nativeElement.querySelector('.dropdown-menu');

    this.clickSubscription = fromEvent<Event>(nativeElement, 'click').
      subscribe((event: Event) => {
        console.log('clicksubscribtion');
        event.preventDefault();
        if (!this.isOpen) {
          this.renderer.addClass(dropdown, 'show');
          this.isOpen = true;
          document.addEventListener('click', this.documentClickListener);
        } else {
          this.renderer.removeClass(dropdown, 'show');
          this.isOpen = false;
          document.removeEventListener('click', this.documentClickListener);
        }
      });
  }

  ngOnDestroy() {
    this.clickSubscription.unsubscribe();
    this.documentClickSubscription.unsubscribe();
  }

  private documentClickListener = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    const dropdownElement = this.elementRef.nativeElement;
    const isClickedInside = dropdownElement.contains(targetElement);

    if (!isClickedInside) {
      this.renderer.removeClass(dropdownElement.querySelector('.dropdown-menu'), 'show');
      this.isOpen = false;
      document.removeEventListener('click', this.documentClickListener);
    }
  };
}