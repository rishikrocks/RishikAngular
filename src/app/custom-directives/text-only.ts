import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]',
  standalone: true
})
export class TextOnly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    let regex = new RegExp(/^[0-9]*$/);
    // let regex = new RegExp(/^[a-z]+$/);   // Text Only
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }
}

export { TextOnly as NumberonlyDirective };
