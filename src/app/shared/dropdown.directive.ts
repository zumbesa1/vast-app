import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  
    @HostListener('click') toggleOpen() {
      const nativeElement = this.elementRef.nativeElement;
      const dropdown = nativeElement.querySelector('.dropdown-menu');
  
      if (!this.isOpen) {
        this.renderer.addClass(dropdown, 'show');
        this.isOpen = true;
        document.addEventListener('click', this.documentClickListener);
      } else {
        this.renderer.removeClass(dropdown, 'show');
        this.isOpen = false;
        document.removeEventListener('click', this.documentClickListener);
      }
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