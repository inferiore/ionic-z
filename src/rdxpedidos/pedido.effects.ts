import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actions, Effect } from "@ngrx/effects";
import {PedidoActionTypes,action_obtener_pedidos_store } from "../rdxpedidos/ReducerPedido"
import {PedidoService} from "../rdxpedidos/pedido.service"
import { Store } from "@ngrx/store";
import { AppStore } from "../app/app.store";

@Injectable()
export class PedidosEffects 
{
  constructor(private actions: Actions,
              private pedidoservicio:PedidoService,private store:Store<AppStore>) {}     

/*
  @Effect()
  listapedidos = this.actions
    .ofType(PedidoActionTypes.OBTENER_PEDIDOS_STORE)
    .switchMap(result=>{
      console.log('Efect: pedido store');
      debugger;
      return this.pedidoservicio.cargar_pedido_store()
     .then(t=> new action_cargar_lista(t))
     //.catch(t=>Observable.of(new action_error_pedidos()));
    }
  
  );

*/

}