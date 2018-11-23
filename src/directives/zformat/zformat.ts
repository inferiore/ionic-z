import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgModel, NgControl } from "@angular/forms";



/**
 Fp++
 Esta directiva se desarrolla con el objetivo de poder validar la entrada de un campo y formatear el campo
 para una presentación mas agradable en el sistema.
 */
@Directive
  ({
    selector: '[zformat]',// Attribute selector
    providers: [NgModel],
  })

export class ZformatDirective {
  @Input() zformat: { tipo: string, simbolodecimal: string, simbolomiles: string, decimales: number, longitud: number };
  modelo:any;
  constructor(public element: ElementRef, public renderer: Renderer2, public model: NgModel, public control: NgControl) {
    this.modelo=this.model;
    this.model.valueChanges.subscribe(
      (value) => {
        var textochange: string = this.onformateartext(value);

        //reportando datos al componente!
       // this.onreportarvaloralcomponente(textochange);

        //manteniendo el modelo sin formatos!
        this.model.viewToModelUpdate(this.oneliminarformato(textochange));
    
          //actualziando la vista en el DOM
          this.control.valueAccessor.writeValue(textochange);
      }
    )
  }

  ngOnInit() {
    var textochange1: string = this.onformateartext(this.control.value);
    this.control.valueAccessor.writeValue(textochange1);
  }


  @HostListener('keyup') onkeyup() {
    //1. obtener dato del control  
    var texto: string = event.target["value"];
    //var texto: string = this.control.value;
    var textochage: string = this.onformateartext(texto);
    //this.onreportarvaloralcomponente(textochage);
    //event.target["value"] = textochage;
    this.control.valueAccessor.writeValue(textochage);
    //actualizar el modelo para que se mantenga sin formatos.
  }

  private oneliminarformato(texto: string): string {
    try {
      var textchange: string = texto;
      if (this.zformat.tipo == "numerico") {
        //2.1 eliminado los caracteres no permitidos!
        if (this.zformat.decimales > 0) { textchange = textchange.replace(/[^0123456789.-]/g, ''); }
        else { textchange = textchange.replace(/[^0123456789-]/g, ''); }

        //2.2 eliminando signo negativo si no esta al inicio del la cadena!
        textchange = textchange.replace(/(\d+)(-)(\d*)/g, '$1$3');

        //2.3 eliminado numeros si superan la lonmgitud establecida..
        if (this.zformat.longitud > 0) {
          if (this.zformat.longitud < textchange.length) {
            textchange = textchange.substring(0, this.zformat.longitud);
          }
        }
        return textchange;
      }
    }
    catch (err) {
      return texto;
    }

  }


  private onformateartext(texto: string): string {
    try {
      //1. asignar variabole texto para formatearla.
      var textchange: string = JSON.parse(JSON.stringify(texto));

      //2. validar el tipo de formato y controlar la entrada del dato y apariencía!!!!
      if (this.zformat.tipo == "numerico") {
        //2.1 eliminado los caracteres no permitidos!
        if (this.zformat.decimales > 0) { textchange = textchange.replace(/[^0123456789.-]/g, ''); }
        else { textchange = textchange.replace(/[^0123456789-]/g, ''); }

        //2.2 eliminando signo negativo si no esta al inicio del la cadena!
        textchange = textchange.replace(/(\d+)(-)(\d*)/g, '$1$3');

        //2.3 eliminado numeros si superan la lonmgitud establecida..
        if (this.zformat.longitud > 0) {
          if (this.zformat.longitud < textchange.length) {
            textchange = textchange.substring(0, this.zformat.longitud);
          }
        }

        //2.3 formatenado el valor para que aparezca con separador de miles y decimales y truncado según decimales
        var valor = textchange.split(this.zformat.simbolodecimal);
        textchange = valor[0];
        textchange = textchange.replace(/\B(?=(\d{3})+(?!\d))/g, this.zformat.simbolomiles);
        if (valor.length > 1) {
          textchange = textchange + this.zformat.simbolodecimal + valor[1].substring(0, this.zformat.decimales);
        }
      }

      return textchange;
    }
    catch (err) {
      return texto;
    }

  }

  onreportarvaloralcomponente(textchange: string): void {
    this.renderer.setAttribute(this.element.nativeElement, 'value', textchange);
  }

}

