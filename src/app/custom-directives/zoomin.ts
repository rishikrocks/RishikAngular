import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  // let ele = new ElementRef();
      constructor(private ele: ElementRef) {

        console.log(this.ele); //Dependency Injection

      }
      //Dependency Injection
      @HostListener('mouseenter')
      onMouseEnter() {
        this.ele.nativeElement.style.transform = 'scale(100%,130%)';
      }

      @HostListener('mouseleave')
      onMouseLeave() {
        this.ele.nativeElement.style.transform = 'scale(100%)';
      }
}

