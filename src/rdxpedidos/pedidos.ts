//modelo de datos de clientes...
export interface Icliente{
    idcliente:string,
    nomcliente:string,
}

//modelo de datos de vendeor
export interface Ivendedor{
    idvendedor:string,
    nomvendedor:string,
}

//modelo de datos moneda
export interface Imoneda{
    idmoneda:string,
    nommoneda:string,
}


//modelo de datos bu
export interface Ibu{
    idbu:string,
    nombu:string,
}


//modelo de datos conceptos
export interface Iconcepto{
    idconcepto:string,
    nomconcepto:string,
    tipoconcepto:string, //0:Nothing , 1:productos, 2:concepto
}


//modelod e datos pedidos
export interface Iitempedido{
    iditem:string,
    concepto:Iconcepto,
    cantidad:number,
    preciounidad:number,
    descuento:number,
    impuestoventa:number,
    impuestoconsumo:number,
    totalbruto:number,
    totaldescuento:number,
    totaliva:number,
    totalconsumo:number,
    montoitems:number,
}

//clase de pedido de cliente que sera la base del store
export interface Ipedido {
    id: string,
    cliente:Icliente,
    observacion:string,
    vendedor:Ivendedor,
    moneda:Imoneda,
    bu:Ibu,
    fecha:string,
    lsitems:Array<Iitempedido>,
    sincronizado:boolean,
    numeropedido:string,
    facturado:boolean,
    numerofactura:string,
    montototal:number,
  }
//clase que se utilizara para mantener el estado de la aplicación.
export interface Ilstpedidos{
    pedido:Array<Ipedido>,
}
