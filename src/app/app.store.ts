import {UserState} from "../rdxuser/user.reducer";
import {Buscar } from "../rdxbuscar/buscar";
import {EstadoBuscar } from "../rdxbuscar/ReducerBuscar";
import {Ilstpedidos} from "../rdxpedidos/pedidos"
import {EstadolstPedido} from "../rdxpedidos/ReducerPedido"
import { conceptos } from "../redux/zclases";
import { ConceptoState, ClientesState, PreciosState, ParametrosusuariosState, ArticulosState } from "../redux/z.reducer";

export interface AppStore {
  userState:UserState,
  estadobusqueda:EstadoBuscar,
  listapedidos:EstadolstPedido,
  pedido:any;
  item:any;
  estadoconceptos:ConceptoState;
  estadoclientes:ClientesState;
  estadoprecios:PreciosState;
  estadoparametros:ParametrosusuariosState;
  estadoArticulos:ArticulosState;
}
