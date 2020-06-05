import { UppercaseDirective } from './uppercase.directive';
import { ElementRef } from '@angular/core';

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    const directive = new UppercaseDirective(
      new ElementRef(document.createElement('div'))
    );
    expect(directive).toBeTruthy();
  });
});
