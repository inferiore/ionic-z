import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidosPage } from '../pedidos/pedidos';
import { Store } from "@ngrx/store";
import { AppStore } from "../../app/app.store";
import { User } from "../../rdxuser/user";
import { Subscription } from "rxjs";
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { action_obtener_pedidos_store } from "../../rdxpedidos/ReducerPedido"
import { empty } from 'rxjs/observable/empty';
import { isEmpty } from 'rxjs/operator/isEmpty';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private chkguardarcredenciales: boolean;
  private user: User;
  private userStateSubscription: Subscription;


  constructor(private storage: Storage, private navCtrl: NavController,
    private store: Store<AppStore>) {  }

  ionViewDidEnter() {
    this.userStateSubscription = this.store.select('userState').subscribe(userState => {
      this.user = userState.user;
    });
   
    if (this.user == null) {
      this.navCtrl.push(LoginPage);
    }
  }

  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }

  gotopedidos() {
    this.navCtrl.push(PedidosPage);
  }

}
