import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErroMsg]',
})
export class ErroMsgDirective implements OnInit {
  htmlElement!: ElementRef<HTMLElement>;
  color: string = 'red';

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = this.element;
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setClass() {
    this.htmlElement.nativeElement.className = 'form-text';
  }

  ngOnInit(): void {
    this.setColor();
    this.setClass();
  }
}
