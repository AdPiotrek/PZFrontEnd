import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTesting]'
})
export class TestingDirective {

  constructor(private elRef: ElementRef) {

  }

  @HostListener('input') clicked() {
    console.log(this.elRef);
 }

}
