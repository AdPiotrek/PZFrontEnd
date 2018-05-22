import { TestingDirective } from './testing.directive';
import {ElementRef} from '@angular/core';

describe('TestingDirective', () => {
  it('should create an instance', () => {
    const directive = new TestingDirective(new ElementRef(HTMLInputElement));
    expect(directive).toBeTruthy();
  });
});
