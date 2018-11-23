import { Directive, EventEmitter, Output } from '@angular/core';


/**
 * Generated class for the UppercaseDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[uppercase]' // Attribute selector
  ,host:{
    "(input)":'onInputChange($event)'
  }
})
export class UppercaseDirective {
  @Output() ngModelChange:EventEmitter<any>=new EventEmitter();
  value:any;
  constructor() {
    console.log('Hello UppercaseDirective Directive');
  }

  onInputChange($event){
    this.value=$event.target['value'].toUpperCase();
    this.ngModelChange.emit(this.value);
  }
}
