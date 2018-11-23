import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuscarPage } from '../buscar/buscar'
//Redux - stores + observables
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Observable } from "rxjs/Observable";
import { AppStore } from '../../app/app.store'
//Redux - Busqueda en toda la aplicación.
import {
  EstadoBuscar, actionbuscar_terminar,
  actionbusca_retornarresultado, actionbuscar_buscar
} from '../../rdxbuscar/ReducerBuscar';
import { EstadolstPedido, action_additems_pedidos } from '../../rdxpedidos/ReducerPedido';
import { Ipedido, Ilstpedidos, Iitempedido } from '../../rdxpedidos/pedidos';
import { clsPedidos, clsItemsPedido } from '../../app/app.clases';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  //variables para captura de información.
  private opedido: clsPedidos;
  private oitem: clsItemsPedido;
  private formitem: FormGroup;

  //asignando variables para control de ingreso del dato de ITEMS.
  private aplicaiva: boolean;
  private aplicainc: boolean;
  private ivadefault: number;
  private incdefault: number;
  private modificarprecio: boolean;
  private modificardescuento: boolean;


  get precio(): string {
    try {
      return this.oitem.preciounidad.toString();
    }
    catch (err) {
      return "0";
    }
  }

  set precio(dato: string) {
    try {
      this.oitem.preciounidad = parseFloat(dato.replace(/[^0123456789.-]/, ''));
    }
    catch (err) {
      this.oitem.preciounidad = 0
    }
  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, private formBuilder: FormBuilder,
    public navParams: NavParams, private store: Store<AppStore>) {
    this.formitem = this.formBuilder.group({
      cliente: ['', Validators.required],
      cantidad: ['', Validators.compose([Validators.required])],
      preciounidad: ['', Validators.required],
      descuento: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])],
      impuestoventa: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])],
      impuestoconsumo: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])],
    });
    this.opedido = new (clsPedidos);
    this.oitem = new (clsItemsPedido);
    if (this.navParams.get("modo") == "edit") {
      this.oitem.itempedido = this.navParams.get("oitem");
    }
    this.opedido = this.navParams.get("opedido");
  }

  buscarproductos() {
    this.gotobuscar('producto_recod_item', 'productos');
  }


  validaritems(): boolean {
    try {
      if (this.oitem.nomconcepto == '') {
        this.showAlert('validacion', 'Seleccione producto');
        return false;
      }
    } catch (err) {
      this.showAlert('validacion', 'Seleccione producto');
      return false;
    }
    return true;
  }

  aceptar() {
    if (this.validaritems()) {
      if (this.navParams.get("modo") == "edit") {
        this.oitem = JSON.parse(JSON.stringify(this.oitem));
        this.opedido.actualizarmontototal();
      }
      else {
        this.opedido.additem(JSON.parse(JSON.stringify(this.oitem)));
      }
      this.closepagina();
    }
  }

  closepagina() {
    this.navCtrl.pop();
  }

  ionViewDidEnter() {
    this.subscripcionbusqueda();
  }

  gotobuscar(quienbusca: string, tipobusqueda: string) {
    this.store.dispatch(new actionbuscar_buscar(quienbusca, tipobusqueda));
    this.navCtrl.push(BuscarPage);
  }

  showAlert(titulo: string, descripcion: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: descripcion,
      buttons: ['OK']
    });
    alert.present();
  }

  subscripcionbusqueda() {
    this.store.select('estadobusqueda')
      .subscribe(
        estado => {
          this.obtenerresultadobusqueda(estado);
        }
      );
  }

  obtenerresultadobusqueda(estado: EstadoBuscar): any {
    console.log("dato devuelto",estado);
    try {
      if (estado != null) {
        if (estado.buscar != null) {
          if (estado.buscar.clasebusqueda == "productos") {
            switch (estado.buscar.solicitante) {
              case 'producto_recod_item':
                if (this.oitem.itempedido.concepto.idconcepto != estado.buscar.datosbusqueda.iditem) {
                  this.oitem.itempedido.concepto = {
                    idconcepto: estado.buscar.datosbusqueda.iditem,
                    nomconcepto: estado.buscar.datosbusqueda.descripcion,
                    tipoconcepto: "0"
                  };
                  //asignado propiedades para validación!.
                  this.aplicaiva = estado.buscar.datosbusqueda.dato.aplicaiva;
                  this.aplicainc = estado.buscar.datosbusqueda.dato.aplicainc;
                  this.ivadefault = estado.buscar.datosbusqueda.dato.ivadefault;
                  this.incdefault = estado.buscar.datosbusqueda.dato.incdefault;

                  //asignado caracteristicas al productos!
                  this.oitem.itempedido.cantidad = 1;
                  this.oitem.itempedido.impuestoventa = this.ivadefault;
                  this.oitem.itempedido.impuestoconsumo = this.incdefault;

                  this.store.dispatch(new actionbuscar_terminar());
                }
                return;
            }
          }
        }
      }
    } catch (err) { }
  }
}
