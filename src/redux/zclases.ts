export interface conceptos {
  id: number,
  idconcepto: number,
  codigo: string,
  presentacion: string,
  nombre:string,
  esunconcepto:boolean,
  aplicaiva:boolean,
  ivadefault:number,
  incdefault:number,
  syschange:string,
}

export interface clientes{
  id:number,
  codigo:string,
  nombre:string,
  tipocliente:string,
  zona:string,
  syschange:string
}

export interface ParametrosUsuarios{
  Nombre:string,
  Descripcion:string,
  Tipo:string,
  Valor:string
}

export interface precios {
    id:number,
    idconcepto:number,
    precio:number,
    tipocliente:string,
    zona:string,
    syschange:string
}
//EBarrios
export interface ListaDePrecio {
  Iden_preciosventas:number,
  IdArticulo:number,
  Valor:number,
  TipoCliente:string 
}
//EBarrios
export interface Articulo {
  IdArticulo:number,
  Codigo:string,  
  Nombre:string,    
  Presentacion:string,
  PrecioVenta:number,
  PorcentajeIva:number,
  ConfiguracionPrecioVenta:number,  

}