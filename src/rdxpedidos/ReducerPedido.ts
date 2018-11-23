import { Ilstpedidos, Ipedido, Iitempedido } from "../rdxpedidos/pedidos";
import { Action, Store } from "@ngrx/store";
import { clsPedidos, clsItemsPedido, clsListaPedidos, } from "../app/app.clases";

export const PedidoActionTypes = {
  OBTENER_PEDIDOS_STORE: 'OBTENERPEDIDOSSTORE',
  ACTUALIZAR_PEDIDOS_STORE: 'ACTUALIZAR_PEDIDOS_STORE',
  AGREGAR_PEDIDOS: 'AGREGAR_PEDIDOS',
  SINCRONIZAR_PEDIDOS: 'SINCRONIZAR_PEDIDOS', //Reporte pedidos a zeus inventarios.
  MODIFICAR_PEDIDOS: 'MODIFICAR_PEDIDOS',
  ELIMINAR_PEDIDOS: 'ELIMINAR_PEDIDOS',
  AGREGAR_ITEMS_PEDIDO: 'AGREGAR_ITEMS_PEDIDO',
  ELIMINAR_ITEMS_PEDIDO: 'ELIMINAR_ITEMS_PEDIDO',
  MODIFICAR_ITEMS_PEDIDO: 'MODIFICAR_ITEMS_PEDIDO',
  ERROR: 'PEDIDO_ERROR',
  CARGAR_PEDIDOS: 'CARGAR_PEDIDOS',
  SELECCIONAR_PEDIDOS: 'SELECCIONAR_PEDIDOS',
  SELECCIONAR_ITEMS_PEDIDO: 'SELECCIONAR_ITEMS_PEDIDO',
  MARCARPEDIDO_PENDIENTE_ACTUALIZAR:'MARCARPEDIDO_PENDIENTE_ACTUALIZAR'
};

export interface EstadolstPedido {
  cargado: boolean,
  actualizado: boolean,
  pedidoseleccionado: clsPedidos,
  itemsseleccionado: clsItemsPedido,
  ListaPedidos: clsListaPedidos,
}

const initialState: EstadolstPedido = {
  cargado: false,
  actualizado: false,
  pedidoseleccionado: null,
  itemsseleccionado: null,
  ListaPedidos: null,
}


export class action_marcarpedido_pendienteporactualziar implements Action {
  type = PedidoActionTypes.MARCARPEDIDO_PENDIENTE_ACTUALIZAR;
  constructor() {
  }
}

export class action_obtener_pedidos_store implements Action {
  type = PedidoActionTypes.OBTENER_PEDIDOS_STORE;
  olistapedido:clsListaPedidos;
  constructor(olistapedido:clsListaPedidos) {
    this.olistapedido=olistapedido;
  }
}

export class action_actualizar_pedidos_store implements Action {
  type = PedidoActionTypes.ACTUALIZAR_PEDIDOS_STORE;
  constructor() {
  }
}

export class action_cargar_lista implements Action {
  type = PedidoActionTypes.CARGAR_PEDIDOS;
  Lspedidos: Ilstpedidos;
  constructor(Listapedidos: any) {
    this.Lspedidos = Listapedidos;
  }
}


export class action_agregar_pedidos implements Action {
  type = PedidoActionTypes.AGREGAR_PEDIDOS;
  opedido: clsPedidos;
  constructor(opedido:clsPedidos) {
    this.opedido=opedido;
  }
}


export class action_sincronizar_pedidos implements Action {
  type = PedidoActionTypes.SINCRONIZAR_PEDIDOS;
  Lspedidos: Ilstpedidos;
  pedido: Ipedido;
  constructor(Listapedidos: any, Pedido: Ipedido) {
    this.Lspedidos = Listapedidos;
    this.pedido = Pedido;
  }
}


export class action_seleccionar_pedidos implements Action {
  type = PedidoActionTypes.SELECCIONAR_PEDIDOS;
  opedido: clsPedidos;
  constructor(opedido: clsPedidos) {
    this.opedido = opedido;
  }
}

export class action_additems_pedidos implements Action {
  type = PedidoActionTypes.AGREGAR_ITEMS_PEDIDO;
  oitem: clsItemsPedido;
  constructor(oitem:clsItemsPedido) {
    this.oitem = oitem;
  }
}


export class action_update_pedidos implements Action {
  type = PedidoActionTypes.MODIFICAR_PEDIDOS;
  opedido: clsPedidos;
  constructor(opedido:clsPedidos) {
    this.opedido=opedido;
  }
}


export class action_eliminar_pedidos implements Action {
  type = PedidoActionTypes.ELIMINAR_PEDIDOS;
  opedido:clsPedidos;
  constructor(opedido:clsPedidos) {
    this.opedido=opedido;
  }
}

export function PedidoReducer(state: any = initialState, action: any): EstadolstPedido {
  switch (action.type) {
 
    case PedidoActionTypes.OBTENER_PEDIDOS_STORE:
    return {...state,ListaPedidos:action.olistapedido,cargado:true};
 
    case PedidoActionTypes.AGREGAR_PEDIDOS:
      state.ListaPedidos.addpedido(action.opedido);
      return {...state, actualizado: true};

    case PedidoActionTypes.SELECCIONAR_PEDIDOS:
      return {...state, pedidoseleccionado: action.opedido, actualizado: false};

    case PedidoActionTypes.AGREGAR_ITEMS_PEDIDO:
      //adicionando items al pedido seleccionado!
      state.pedidoseleccionado.modificaritem(state.itemsseleccionado,action.oitem);
      return {...state, actualizado: false};

    case PedidoActionTypes.MODIFICAR_ITEMS_PEDIDO:
      //adicionando items al pedido seleccionado!
      state.pedidoseleccionado.additem(action.oitem);
      return {...state, actualizado: false};

    case PedidoActionTypes.ACTUALIZAR_PEDIDOS_STORE:
      return {...state, actualizado: false};

    case PedidoActionTypes.MODIFICAR_PEDIDOS:
      state.ListaPedidos.updatepedido(state.pedidoseleccionado,action.opedido);
      return {...state, actualizado: true};

      case PedidoActionTypes.ELIMINAR_PEDIDOS:
      state.ListaPedidos.delpedido(action.opedido);
      return {...state, actualizado: true};
      
      case PedidoActionTypes.MARCARPEDIDO_PENDIENTE_ACTUALIZAR:
      return {...state, actualizado: true};

    default:
    return {...state, actualizado: false};
  }
}

