import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
})
export class CardStyleDirective {
  @Input() backgroundImage: string;
  @Input() widthImage: string;
  @Input() heightImage: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(): void {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-image',
      this.backgroundImage
    );
  }
}
