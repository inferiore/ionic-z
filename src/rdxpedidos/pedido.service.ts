import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import { Storage } from '@ionic/storage';
import {PedidoActionTypes,action_obtener_pedidos_store} from "../rdxpedidos/ReducerPedido";

@Injectable()
export class PedidoService {

  constructor(private http: Http,private storage:Storage) {
  }

  public cargar_pedido_store():any {
      return this.storage.get('LstPedidos');
  }
  
  
  
}

