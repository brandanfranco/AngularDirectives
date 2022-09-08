import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroMsgDirective } from './directives/erro-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [ErroMsgDirective, CustomIfDirective],
  imports: [CommonModule],
  exports: [ErroMsgDirective, CustomIfDirective],
})
export class SharedModule {}
