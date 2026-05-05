import { Zoomin } from './zoomin';
import { ElementRef } from '@angular/core';

describe('Zoomin', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('div'));
    const directive = new Zoomin(elementRef);
    expect(directive).toBeTruthy();
  });
});
