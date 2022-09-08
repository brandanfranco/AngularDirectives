import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appErroMsg]',
})
export class ErroMsgDirective implements OnInit, OnChanges {
  _message: string = 'requerido';
  _color: string = 'red';
  @Input() set message(valor: string) {
    this._message = valor;
    this.setMessaje();
  }
  htmlElement!: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set value(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = this.element;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messaje']) {
      this.htmlElement.nativeElement.innerText = this.message;
    }

    console.log(changes);
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setClass() {
    this.htmlElement.nativeElement.className = 'form-text';
  }

  setMessaje() {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  ngOnInit(): void {
    this.setClass();
    this.setColor();
    this.setMessaje();
  }
}
