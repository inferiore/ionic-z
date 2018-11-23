import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actions, Effect } from "@ngrx/effects";
import { SyncService } from '../redux/z.service';
import { ConsultarAction, ActionTypes, ConsultarActionClientes,  ConsultarActionArticulos, ConsultarActionParametros, ConsultarActionPrecios } from "./z.reducer";

@Injectable()
export class SyncEffects {

  constructor(private actions: Actions,
              private syncService: SyncService) {}

  //effect consulta de conceptos...
  @Effect()
  consultarconcepto = this.actions.ofType(ActionTypes.CONSULTAR)
    .map( (action:ConsultarAction) => action)
    .switchMap(action => this.syncService.consultar(action.type)
      .map(
        response => ({ type: ActionTypes.SUCCESS, concepto: (response) })
      )
      .catch(() => Observable.of({ type: ActionTypes.ERROR }))
    );
    //effect consulta de clientes
    @Effect()
    consultarclientes = this.actions.ofType(ActionTypes.CLIENTES_CONSULTAR)
      .map( (action:ConsultarActionClientes) => action)
      .switchMap(
        action =>   this.syncService.consultar(action.type)
        .map(response => (
            { type: ActionTypes.CLIENTES_SUCCES, oclientes: (response) }
            )
            
            
      )
        .catch(() => Observable.of({ type: ActionTypes.CLIENTES_ERROR }))
      );

    //effect consulta de precios
    @Effect()
    consultarprecios = this.actions.ofType(ActionTypes.PRECIOS_CONSULTAR)
      .map( (action:ConsultarActionPrecios) => action)
      .switchMap(action => this.syncService.consultar(action.type)
        .map(response => ({ type: ActionTypes.PRECIOS_SUCCES, oprecios: (response) })
      )
        .catch(() => Observable.of({ type: ActionTypes.PRECIOS_ERROR }))
      );

        //effect consulta de articulos
    @Effect()
    consultarArticulos = this.actions.ofType(ActionTypes.ARTICULOS_CONSULTAR)
      .map( (action:ConsultarActionArticulos) => action)
      .switchMap(action => this.syncService.consultar(action.type)
        .map(response => ({ type: ActionTypes.ARTICULOS_SUCCES, articulos: (response) })
      )
        .catch(() => Observable.of({ type: ActionTypes.ARTICULOS_ERROR }))
      );

          //effect consulta de parametros
    @Effect()
    consultarParametros = this.actions.ofType(ActionTypes.PARAMETROS_CONSULTAR)
      .map( (action:ConsultarActionParametros) => action)
      .switchMap(action => this.syncService.consultar(action.type)
        .map(response => ({ type: ActionTypes.PARAMATEROS_SUCCES, oparamtros: (response) })
      )
        .catch(() => Observable.of({ type: ActionTypes.PARAMETROS_ERROR }))
      );
}
