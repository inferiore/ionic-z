import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//redux - stores + observables
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Observable } from "rxjs/Observable";
import { AppStore } from '../../app/app.store';
//Redux - Busqueda en toda la aplicación.
import { EstadoBuscar, actionbuscar_terminar } from '../../rdxbuscar/ReducerBuscar';
import { actionbusca_retornarresultado, actionbuscar_buscar } from '../../rdxbuscar/ReducerBuscar';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  //todos los items de busqueda mantienen una estructura codigo descrición!!!
  private lstitems: Array<{ iditem: string, descripcion: string ,dato:any}>;
  private lstitemsshow: Array<{ iditem: string, descripcion: string ,dato:any}>;
  private StateSubscription: Subscription;
  private Estadobusqueda: EstadoBuscar;
  private clasebusqueda: string;
  private solicitante: string;


  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>) {}

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    this.lstitemsshow=JSON.parse(JSON.stringify(this.lstitems));
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.lstitemsshow = this.lstitemsshow.filter((item) => {
        return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  seleccionaritems(selitem: any) {
    var selitem1: any = JSON.parse(JSON.stringify(selitem));
    this.store.dispatch(new actionbusca_retornarresultado(this.solicitante, this.clasebusqueda, selitem1));
    this.closepagina();
  }

  terminarbusqueda() {
    this.closepagina();
  }

  closepagina() {
    this.navCtrl.pop();
  }

  ionViewDidEnter() {
    this.StateSubscription = this.store.select('estadobusqueda')
      .subscribe(
        estadobuscar1 => {
          this.Estadobusqueda = estadobuscar1;
          if (this.Estadobusqueda.buscar != null) {
            this.clasebusqueda = this.Estadobusqueda.buscar.clasebusqueda;
            this.solicitante = this.Estadobusqueda.buscar.solicitante;
            this.initializeItems(this.clasebusqueda);
          }
          else {
            this.clasebusqueda = "";
            this.solicitante = "";
          }
        }
      );
  }

  ionViewDidLeave() {
    this.StateSubscription.unsubscribe();
  }


  initializeItems(clasebusqueda: string) {
    if (clasebusqueda == "") { return; }
    if (clasebusqueda == "clientes") {
      this.obtenerlistaclientes();
    }
    if (clasebusqueda == "productos") {
      this.obtenerlistaproductos();
    }
  }

  obtenerlistaclientes()
  {
    //armando estructura para consulta de clientes!!!
      try {
      this.storage.get('SysClientes').then((val) => {
        //obteniendo conceptos y armando estructura de items.
        this.lstitemsshow=[{iditem:null,descripcion:null,dato:null}];
        //armando estructura de objetos para busqueda!       
        if(val!=null){
          val.forEach(element => {
            this.lstitemsshow.push({ iditem: element.codigo, descripcion: element.nombre,dato:element });
          });
        }
         //eliminado primer registro del array en null;
       this.lstitemsshow.shift();
       //asignar los items para mostrar...
       this.lstitems=JSON.parse(JSON.stringify(this.lstitemsshow));
      });
    }
    catch (err) {}
  }

  obtenerlistaproductos() {
    //armando estructura para la consulta!
    try {
      this.storage.get('SysArticulos').then((val) => {
        //obteniendo conceptos y armando estructura de items.
        this.lstitemsshow=[{iditem:null,descripcion:null,dato:null}];
        //armando estructura de objetos para busqueda!
        if(val!=null){
          val.forEach(element => {
          this.lstitemsshow.push({ iditem: element.IdArticulo, descripcion: element.Nombre,dato:element });
          });
        }
        
         //eliminado primer registro del array en null;
       this.lstitemsshow.shift();
       //asignar los items para mostrar...
       this.lstitems=JSON.parse(JSON.stringify(this.lstitemsshow));
      });
    }
    catch (err) {}
  }
}