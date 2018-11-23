import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item'
import { BuscarPage } from '../buscar/buscar'
import { EstadoBuscar } from '../../rdxbuscar/ReducerBuscar';
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Observable } from "rxjs/Observable";
import { AppStore } from '../../app/app.store'
import { actionbusca_retornarresultado, actionbuscar_buscar, actionbuscar_terminar } from '../../rdxbuscar/ReducerBuscar';
import { Ipedido, Ilstpedidos, Icliente } from '../../rdxpedidos/pedidos';
import { action_seleccionar_pedidos, EstadolstPedido, action_additems_pedidos, action_agregar_pedidos, action_update_pedidos, action_eliminar_pedidos, action_marcarpedido_pendienteporactualziar } from '../../rdxpedidos/ReducerPedido';
import { clsPedidos, clsListaPedidos, clsItemsPedido } from '../../app/app.clases';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/navigation/url-serializer';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RecordpedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recordpedido',
  templateUrl: 'recordpedido.html',
})

export class RecordpedidoPage {
  private estadobuscar: EstadoBuscar;
  private opedido: clsPedidos;
  private modoitem: string;

  constructor(public alertCtrl: AlertController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>) {
    this.opedido = new (clsPedidos);
    if (this.navParams.get("pedido") != null) {
      this.opedido.pedido = this.navParams.get("pedido");
    }
  }

  ionViewDidLoad() { console.log('ionViewDidLoad RecordpedidoPage'); }

  ionViewDidEnter() {
    this.subscripcionbusqueda();
  }

  ionViewDidLeave() {
  }

  puedoagregaritems() {
    try {
      if (this.opedido.nomcliente != "") {
        return true;
      }
      return false;
    }
    catch{ return false; }
  }

  gotoedititem(oitem: clsItemsPedido) {
    // this.store.dispatch(new action_seleccionar_pedidos(this.opedido));
    if (oitem != null) {
      this.modoitem = "edit";
      this.navCtrl.push(ItemPage, { modo: this.modoitem, oitem: oitem, opedido: this.opedido });
    }
    else {
      this.modoitem = "add";
      this.navCtrl.push(ItemPage, { modo: this.modoitem, oitem: null, opedido: this.opedido });
    }

  }

  eliminaritems(oitem: clsItemsPedido) {
    debugger;
    this.opedido.delitem(oitem);
  }

  showAlert(titulo: string, descripcion: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: descripcion,
      buttons: ['OK']
    });
    alert.present();
  }

  validarpedido(): boolean {

    if (this.opedido.nomcliente == "") {
      this.showAlert('validación', 'Seleccione cliente');
      return false;
    }

    try {
      if (this.opedido.pedido.lsitems.length == 0) {
        this.showAlert('validación', 'Ingrese Items del pedido');
        return false;
      }
    } catch (err) {
      this.showAlert('validación', 'Ingrese Items del pedido');
      return false;
    }

    return true;
  }


  aceptarpedido() {
    if (this.validarpedido()) {
      if (this.navParams.get("modo") == "add") {
        this.agregarpedido();
      }
      else {
        this.actualizarpedido();
      }
    }
  }

  actualizarpedido() {
    this.store.dispatch(new action_marcarpedido_pendienteporactualziar());
    this.opedido = JSON.parse(JSON.stringify(this.opedido));
    this.navCtrl.pop();
  }

  eliminarpedido() {
    this.store.dispatch(new action_eliminar_pedidos(JSON.parse(JSON.stringify(this.opedido))));
    this.navCtrl.pop();
  }

  agregarpedido() {
    this.store.dispatch(new action_agregar_pedidos(JSON.parse(JSON.stringify(this.opedido))));
    this.navCtrl.pop();
  }

  closepagina() {
    this.navCtrl.pop();
  }

  gotobuscarcliente() {
    this.gotobuscar('Cliente_recod_pedido', 'clientes');
  }


  gotobuscar(quienbusca: string, tipobusqueda: string) {
    this.store.dispatch(new actionbuscar_buscar(quienbusca, tipobusqueda));
    this.navCtrl.push(BuscarPage);
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
    try {
      if (estado != null) {
        if (estado.buscar != null) {
          if (estado.buscar.clasebusqueda == "clientes") {
            switch (estado.buscar.solicitante) {
              case 'Cliente_recod_pedido':
                this.opedido.pedido.cliente = {
                  idcliente: estado.buscar.datosbusqueda.iditem,
                  nomcliente: estado.buscar.datosbusqueda.descripcion
                };
                this.store.dispatch(new actionbuscar_terminar());
                return;
            }
            this.estadobuscar = estado;
          }
        }
      }
    } catch (err) { }
  }
}
