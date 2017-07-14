import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // @HostBinding('style.color') color: string;
  // @HostBinding('style.transition') transition: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {  }

  ngOnInit(){

  }

  @HostListener('mouseover') onMouseOver(){
    let dirEl = this.el.nativeElement.getElementById('demo');
    // this.transition = 'all .5s ease';
    // this.color = 'red';
  }

  // @HostListener('mouseleave') onMouseOut(){
  //   this.transition = 'all .5s ease';
  //   this.color = '#fff';
  // }


}
