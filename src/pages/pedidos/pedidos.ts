import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecordpedidoPage } from '../recordpedido/recordpedido'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app/app.store';
import { EstadolstPedido, action_seleccionar_pedidos, action_obtener_pedidos_store, action_actualizar_pedidos_store } from '../../rdxpedidos/ReducerPedido';
import { clsListaPedidos, clsPedidos } from '../../app/app.clases';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  private storecargadoporprimeravez: boolean = false;
  olistapedidos: clsListaPedidos;

  constructor(private storage: Storage, private store: Store<AppStore>, public navCtrl: NavController, public navParams: NavParams) {
    this.olistapedidos = new (clsListaPedidos);
    this.cargarpedidosdelstrore();
  }


  ionViewDidEnter() {
    this.subscripcionstorage();
  }

  subscripcionstorage() {
    this.store.select('listapedidos')
      .subscribe(
        estado => {
          this.actualizarstorage(estado);
        }
      );
  }

  actualizarstorage(estado: EstadolstPedido) {
    try {
      if (estado != null) {
        if (estado.ListaPedidos != null) {
          if (estado.cargado && estado.actualizado)
            if (estado.ListaPedidos.listapedido.pedido != null) {
              console.log(JSON.stringify(estado.ListaPedidos));
              this.store.dispatch(new action_actualizar_pedidos_store());
              this.storage.set('storeListaPedidos',JSON.parse(JSON.stringify(estado.ListaPedidos)));
            }
        }
      }
    }
    catch (err) { }
  }

  cargarpedidosdelstrore() {
    try {
      this.storage.get('storeListaPedidos').then((val) => {
        if (val != null) {
          var newpedidos: clsListaPedidos = new (clsListaPedidos);
          newpedidos = val;
          this.olistapedidos.listapedido =newpedidos.listapedido;
        }
        this.store.dispatch(new action_obtener_pedidos_store(this.olistapedidos));
      });
    }
    catch (err) { }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  ionViewDidActive() {
    console.log('Activando la pagina de pedidos');
  }

  gotorecordpedido(opedido: clsPedidos) {
    var modoedicion: string;
    modoedicion = "edit";
    if (opedido == null) { modoedicion = "add" };
    this.navCtrl.push(RecordpedidoPage, { modo: modoedicion, pedido:opedido});
  }

  eliminarpedidos(opedido: any) {
    this.olistapedidos.delpedido(opedido);
  }

}
