import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroMsgDirective } from './directives/erro-msg.directive';

@NgModule({
  declarations: [ErroMsgDirective],
  imports: [CommonModule],
  exports: [ErroMsgDirective],
})
export class SharedModule {}
