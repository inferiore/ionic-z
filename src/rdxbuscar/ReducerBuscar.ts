import {Buscar} from "./Buscar";
import {Action} from "@ngrx/store";



export const BusquedaActionTypes = {
  BUSCAR: 'BUSCAR',
  TERMINAR_BUSQUEDA: 'TERMINAR_BUSQUEDA',
  RETORNAR_RESULTADO: 'RETORNAR_RESULTADO',
};

export interface EstadoBuscar {
  enproceso: boolean,
  error: boolean,
  buscar:Buscar;
}

const initialState: EstadoBuscar = {
  enproceso: false,
  error: false,
  buscar: null
};

export class actionbuscar_buscar implements Action {
  type = BusquedaActionTypes.BUSCAR;
  buscar:Buscar;

  constructor(public Solicitante:string,public Clasebusqueda:string) {
    this.buscar={ solicitante:Solicitante,
      clasebusqueda: Clasebusqueda,
      datosbusqueda: null}
  }
}

export class actionbuscar_terminar implements Action {
  type = BusquedaActionTypes.TERMINAR_BUSQUEDA;
  buscar:null;

  constructor() {
  }
}

export class actionbusca_retornarresultado implements Action {
  type = BusquedaActionTypes.RETORNAR_RESULTADO;
  buscar:Buscar;

  constructor(public Solicitante:string,public Clasebusqueda:string,public rdatosbusqueda:any) {
    this.buscar={ solicitante:Solicitante,
      clasebusqueda: Clasebusqueda,
      datosbusqueda: rdatosbusqueda}
  }
}

export function BuscarReducer(state: any = initialState, action: any):EstadoBuscar {
  switch (action.type) {
    case BusquedaActionTypes.BUSCAR:
      return {enproceso: true ,error:false,buscar:action.buscar };

    case BusquedaActionTypes.TERMINAR_BUSQUEDA:
      return {enproceso: false ,error:false,buscar:action.buscar };

    case BusquedaActionTypes.RETORNAR_RESULTADO:
      return {enproceso: false , error:false,buscar:action.buscar };

    default:
      return state;
  }
}


