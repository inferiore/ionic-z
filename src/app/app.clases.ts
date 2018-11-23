import {Ilstpedidos, Ipedido, Icliente, Ivendedor, Ibu, Iconcepto, Imoneda, Iitempedido} from '../rdxpedidos/pedidos';
import { Guid } from "guid-typescript";

//clientes
export class clsClientes{
    cliente:Icliente;
    constructor(){
        this.cliente={
            idcliente:"",
            nomcliente:""
        };
    }
}

//clase vendedores
export class clsVendedores{
    vendedor:Ivendedor;
    contructor(){
        this.vendedor={
            idvendedor:"",
            nomvendedor:"",
        };
    }
}

//clase monedas
export class clsMonedas{
    moneda:Imoneda;
    contructor(){
        this.moneda={
            idmoneda:"",
            nommoneda:"",
        };
    }
}

//clase bus
export class clsBUs{
    bu:Ibu;
    contructor(){
        this.bu={
            idbu:"",
            nombu:"",
        };
    }
}

//clase concepto
export class clsConceptos{
    concepto:Iconcepto;
    constructor(){
        this.concepto={
            idconcepto:"",
            nomconcepto:"",
            tipoconcepto:"0",
        };
    }
}

//clase lista de pedidos contiene una propiedad de tipo Array.
export class clsListaPedidos{
    listapedido:Ilstpedidos;
    constructor()
    {
        this.listapedido={pedido:null};
    }

    addpedido(objectpedido:clsPedidos)
    {
        if (this.listapedido.pedido==null)
        {
            this.listapedido.pedido=[objectpedido.pedido];
        }
        else{this.listapedido.pedido.unshift(objectpedido.pedido);}
    }

    delpedido(opedido:any){
        var idx = this.listapedido.pedido.indexOf(opedido);
        if (idx > -1) {
            this.listapedido.pedido.splice(idx, 1);
        }
    }

    updatepedido(opedido:clsPedidos,onewpedido:clsPedidos){
        opedido.pedido=onewpedido.pedido;
    }

}

//clase pedidos................................................................
export class clsPedidos{
    pedido:Ipedido;
    get nomcliente():string{
        if (this.pedido.cliente.nomcliente=="")
        {
            return "";
        }
        else{
            return this.pedido.cliente.nomcliente;
        }
    }
    
    set nomcliente(dato:string)
    {
        this.pedido.cliente.nomcliente=dato;
    }

    actualizarmontototal()
    {
        try{
            var montopedido:number=0;
            this.pedido.lsitems.forEach(element => {
            montopedido=montopedido+element.montoitems;
            });
            this.pedido.montototal=montopedido;
        }
        catch{
            this.pedido.montototal=0;
        }
    }

    constructor(){
        var f=new Date();
        this.pedido={
            id:Guid.create().toString(),
            cliente:{
                idcliente:"",
                nomcliente:""
            },
            observacion:"",
            vendedor:{
                idvendedor:"",
                nomvendedor:"",
            },
            moneda:{
            idmoneda:"",
            nommoneda:"",
        }
        ,
            bu:{
                idbu:"",
                nombu:"",
            },
            fecha:f.getFullYear()+'/'+(f.getMonth()+1)+'/'+f.getDate(),
            lsitems:null,
            sincronizado:false,
            numeropedido:"",
            facturado:false,
            numerofactura:"",
            montototal:0,
        };
    }

    additem(objectitempedido:clsItemsPedido)
    {
        if (this.pedido.lsitems==null)
        {
            this.pedido.lsitems=[objectitempedido.itempedido];
        }
        else{
            this.pedido.lsitems.unshift(objectitempedido.itempedido);
        }
        this.actualizarmontototal();       
    }

    modificaritem(objectitempedido:clsItemsPedido,objectitempedidonew:clsItemsPedido)
    {
        objectitempedido.itempedido=objectitempedido.itempedido;
        this.actualizarmontototal();       
    }


    delitem(oitem:any){
        var idx = this.pedido.lsitems.indexOf(oitem);
        if (idx > -1) {
            this.pedido.lsitems.splice(idx, 1);
        }
        this.actualizarmontototal();   
    }
}

//clase Items del pedido ....................................................................................
export class clsItemsPedido{
    itempedido:Iitempedido;
    public get nomconcepto():string{
        if (this.itempedido.concepto.nomconcepto=="")
        {
            return "";
        }
        else{
            return this.itempedido.concepto.nomconcepto;
        }
    }
    
    public set nomcliente(dato:string)
    {
        this.itempedido.concepto.nomconcepto=dato;
    }

    get cantidad():number{return this.itempedido.cantidad};
    set cantidad(dato:number){this.itempedido.cantidad=dato;this.actualizartotales();}
    
    get preciounidad():number{return this.itempedido.preciounidad};
    set preciounidad(dato:number){this.itempedido.preciounidad=dato;this.actualizartotales();}

    get descuento():number{return this.itempedido.descuento};
    set descuento(dato:number){this.itempedido.descuento=dato;this.actualizartotales();}

    get impuestoventa():number{return this.itempedido.impuestoventa};
    set impuestoventa(dato:number){this.itempedido.impuestoventa=dato;this.actualizartotales();}

    get impuestoconsumo():number{return this.itempedido.impuestoconsumo};
    set impuestoconsumo(dato:number){this.itempedido.impuestoconsumo=dato;this.actualizartotales();}

    public actualizartotales()
    {
        this.itempedido.totalbruto=this.itempedido.cantidad*this.itempedido.preciounidad;
        this.itempedido.totaldescuento=this.itempedido.cantidad*this.itempedido.preciounidad*this.itempedido.descuento/100;
        this.itempedido.totaliva=this.itempedido.cantidad*this.itempedido.preciounidad*this.itempedido.descuento/100*this.itempedido.impuestoventa/100;
        this.itempedido.totalconsumo=this.itempedido.cantidad*this.itempedido.preciounidad*this.itempedido.descuento/100*this.itempedido.impuestoconsumo/100;
        this.itempedido.montoitems=this.itempedido.cantidad*this.itempedido.preciounidad*
                                (1-this.itempedido.descuento/100)*(1+this.itempedido.impuestoventa/100)*
                                (1+this.itempedido.impuestoconsumo/100);
    }
    
    constructor(){
         this.itempedido={
            iditem:Guid.create().toString(),
            concepto:{
                idconcepto:"",
                nomconcepto:"",
                tipoconcepto:"0",
            },
            cantidad:0,
            preciounidad:0,
            descuento:0,
            impuestoventa:0,
            impuestoconsumo:0,
            montoitems:0,
            totalbruto:0,
            totaldescuento:0,
            totaliva:0,
            totalconsumo:0,
        }
    }

    validar():boolean{
        return true;
    }

}


