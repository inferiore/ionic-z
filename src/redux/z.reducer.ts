
import {conceptos, clientes, precios, Articulo, ParametrosUsuarios} from "./zclases";
import {Action} from "@ngrx/store";


export const ActionTypes = {
    CONSULTAR: 'CONSULTAR',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CLIENTES_CONSULTAR:'CLIENTES_CONSULTAR',
    CLIENTES_SUCCES:'CLIENTES_SUCCES',
    CLIENTES_ERROR:'CLIENTES_ERROR',
    PRECIOS_CONSULTAR:'PRECIOS_CONSULTAR',
    PRECIOS_SUCCES:'PRECIOS_SUCCES',
    PRECIOS_ERROR:'PRECIOS_ERROR',
    PARAMETROS_CONSULTAR:'PARAMETROS_CONSULTAR',
    PARAMATEROS_SUCCES:'PARAMETROS_SUCCES',
    PARAMETROS_ERROR:'PARAMETROS_ERROR',
    ARTICULOS_CONSULTAR:'ARTICULOS_CONSULTAR',
    ARTICULOS_SUCCES:'ARTICULOS_SUCCES',
    ARTICULOS_ERROR:'ARTICULOS_ERROR',
    
};


//definición clases para manejar el estado de la aplicación
export interface ConceptoState {
  loading: boolean,
  error: boolean,
  conceptos: Array<conceptos>
}

const initialState: ConceptoState = {
  loading: true,
  error: false,
  conceptos: null
};


export interface ClientesState {
  loading: boolean,
  error: boolean,
  clientes: Array<clientes>
}

const initialStatecliente: ClientesState = {
  loading: true,
  error: false,
  clientes: null
};

export interface PreciosState {
  loading: boolean,
  error: boolean,
  precios: Array<precios>
}

const initialStateprecios: PreciosState = {
  loading: true,
  error: false,
  precios: null
};


export interface ParametrosUsuariosState {
  loading: boolean,
  error: boolean,
  parametros: Array<ParametrosUsuarios>
}


export interface ArticulosState {
  loading: boolean,
  error: boolean,
  articulos: Array<Articulo>,
  mensaje:string,
}

const initialStateparametros: ParametrosUsuariosState = {
  loading: true,
  error: false,
  parametros: null
};

const initialStateArticulos: ArticulosState = {
  loading: true,
  error: false,
  articulos: null,
  mensaje:null
};

//manejo de acciones por estados
export class ConsultarAction implements Action {
  type = ActionTypes.CONSULTAR;
  concepto:conceptos;
  constructor() {}
}

export class ConsultarActionClientes implements Action {
  type = ActionTypes.CLIENTES_CONSULTAR;
  oclientes:clientes;
  constructor() {
  }
}

export class ConsultarActionPrecios implements Action {
  type = ActionTypes.PRECIOS_CONSULTAR;
  oprecios:precios;
  constructor() {}
}

export class ConsultarActionParametros implements Action {
  type = ActionTypes.PARAMETROS_CONSULTAR;
  oparametros:ParametrosUsuariosState;
  constructor() {}
}
//producto list  action 
export class ConsultarActionArticulos implements Action {
  type = ActionTypes.ARTICULOS_CONSULTAR;
  articulos:Array<Articulo>; 

  constructor() {

  }
}

//Manejod e reducer por cada acción y estados!
export function conceptoReducer(state: any = initialState, action: ConsultarAction) {
  switch (action.type) 
  {
    case ActionTypes.CONSULTAR:
      return { ...state, loading: true };

    case ActionTypes.SUCCESS:
      return { ...state,conceptos:action.concepto,error:false,loading: false };

    case ActionTypes.ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
}

export function clientesreducer(state: any =initialStatecliente, action:ConsultarActionClientes) {
  switch (action.type) 
  {
    case ActionTypes.CLIENTES_CONSULTAR:
      return { ...state, loading: true };

    case ActionTypes.CLIENTES_SUCCES:
      return { ...state,clientes:action.oclientes,error:false,loading: false };

    case ActionTypes.CLIENTES_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
}

export function preciosreducer(state: any =initialStateprecios, action:ConsultarActionPrecios) {
  switch (action.type) 
  {
    case ActionTypes.PRECIOS_CONSULTAR:
      return { ...state, loading: true };

    case ActionTypes.PRECIOS_SUCCES:
      return { ...state,precios:action.oprecios,error:false,loading: false };

    case ActionTypes.PRECIOS_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
}


export function parametrosreducer(state: any = initialStateparametros, action:ConsultarActionParametros) {
  switch (action.type) 
  {
    case ActionTypes.PARAMETROS_CONSULTAR:
      return { ...state, loading: true };

    case ActionTypes.PARAMATEROS_SUCCES:
      return { ...state,parametros:action.oparametros,error:false,loading: false };

    case ActionTypes.PARAMETROS_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }

}

export function ArticulosReducer(state: any = initialStateArticulos, action:ConsultarActionArticulos) {
  switch (action.type) 
  {
    case ActionTypes.ARTICULOS_CONSULTAR:
      return { ...state, loading: true };

    case ActionTypes.ARTICULOS_SUCCES:
      return { ...state,articulos:action.articulos,error:false,loading: false };

    case ActionTypes.ARTICULOS_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
}
