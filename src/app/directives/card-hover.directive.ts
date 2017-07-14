import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {


  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    // el.nativeElement.style.backgroundColor = 'gray';
  }

  @HostListener('mouseover') onMouseOver(){
    let dirEl = this.el.nativeElement.querySelector('.directive-test');
    this.renderer.setElementStyle(dirEl, 'display', 'block');
  }

  @HostListener('mouseout') onMouseOverOut(){
    let dirEl = this.el.nativeElement.querySelector('.directive-test');
    this.renderer.setElementStyle(dirEl, 'display', 'none');
  }

}
