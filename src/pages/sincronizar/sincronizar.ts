import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';
import { AppStore } from "../../app/app.store";
import { Store } from "@ngrx/store";
import { ConsultarAction, ConsultarActionClientes, ConsultarActionArticulos, ConsultarActionPrecios, ConsultarActionParametros } from '../../redux/z.reducer';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the SincronizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sincronizar',
  templateUrl: 'sincronizar.html',
})
export class SincronizarPage {

  private opcionessincronziacion: Array<{ titulo: string, name: string, icono: string, sincronizar: boolean,terminado:boolean,enabled:boolean }>;
  private conceptos: any;
  private clientes:any;
  private paramatros:any;
  private precios:any;
  private loader:Loading;

  constructor(public loading: LoadingController,private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>) {
    this.opcionessincronziacion = [
      { titulo: 'Clientes'       ,name: 'clientes'    ,icono: 'people'       ,sincronizar: true  ,terminado:false  ,enabled:true },
      { titulo: 'Productos'      ,name: 'conceptos'   ,icono: 'cube'         ,sincronizar: true  ,terminado:false  ,enabled:true },
      { titulo: 'Listas Precios' ,name: 'precios'     ,icono: 'pricetag'     ,sincronizar: true  ,terminado:false  ,enabled:true },
      { titulo: 'Parametros'     ,name: 'parametros'  ,icono: 'briefcase'    ,sincronizar: true  ,terminado:false   ,enabled:true },
      // { titulo: 'Ruta programada',name: ''          , icono: 'map'          ,sincronizar: false ,terminado:true ,enabled:false},
      // { titulo: 'Encuestas'     , name: ''          , icono: 'create'       ,sincronizar: false ,terminado:true ,enabled:false},
      // { titulo: 'Cartera'       , name: ''          , icono: 'logo-bitcoin' ,sincronizar: false ,terminado:true ,enabled:false}
    ]
  }

  ionViewDidLoad() {    
    this.subscripcionClientes();    
    this.subscripcionProductos();
    // this.subscripcionconceptos();
    this.subscripcionParametros();
    this.subscripcionPrecios();
    
  }

  sincronizaritems() {
    this.loader = this.loading.create({
      content: 'SINCRONIZANDO  ...',
    });
  
    this.loader.present().then(() => {
        this.sincronizar();
    });
  }

  terminarcarga(){
    if (this.sincronizacionterminada()){
      this.loader.dismiss();
    }    
  }

  cerrarpagina(){
    this.navCtrl.pop();
  }
  //verifica si todos los items han sido sincronziados!
  sincronizacionterminada():boolean{
    let sw:boolean=true;
    this.opcionessincronziacion.forEach(opcion => {
      if (opcion.enabled && !opcion.terminado)
      {
        sw=false;
      }
    })
    return sw;
  }

  sincronizar() {
    this.opcionessincronziacion.forEach(opcion => {
      if(opcion.sincronizar && opcion.name != '') {
        if (opcion.name=='clientes' && opcion.enabled)
        {
          this.store.dispatch(new ConsultarActionClientes());          
        }
        if (opcion.name=='conceptos' && opcion.enabled)
        { 
          this.store.dispatch(new ConsultarActionArticulos());          
        }
        if (opcion.name=='precios' && opcion.enabled)
        {
          this.store.dispatch(new ConsultarActionPrecios());          
        }
        if (opcion.name=='parametros' && opcion.enabled)
        {
          this.store.dispatch(new ConsultarActionParametros());          
        }
      }
    });
  }
  

  subscripcionconceptos() {
    this.store.select('estadoconceptos').subscribe(estado => {
      try {
        if (!estado.loading) {
          this.cargarstorage('SysConceptos', estado.conceptos);
          this.opcionessincronziacion[1].terminado=true;
          this.terminarcarga();
        }
      }
      catch (err) { console.log(err); }
    });
  }

  subscripcionClientes() {
    this.store.select('estadoclientes').subscribe(estado => {
      try {
        if (!estado.loading) {
          this.cargarstorage('SysClientes', estado.clientes);
          this.opcionessincronziacion[0].terminado=true;
          this.terminarcarga();
        }
      }
      catch (err) { console.log(err); }
    });
  }
  subscripcionProductos() {
    this.store.select('estadoArticulos').subscribe(estado => {
      
      try {
        if (!estado.loading) {
          this.cargarstorage('SysArticulos', estado.articulos);
          this.opcionessincronziacion[1].terminado=true;
          this.terminarcarga();
        }
      }
      catch (err) { console.log(err); }
    });
  }

  subscripcionPrecios() {
    this.store.select('estadoprecios').subscribe(estado => {
      try {
        if (!estado.loading) {
          this.cargarstorage('SysPrecios', estado.precios);
          this.opcionessincronziacion[2].terminado=true;
          this.terminarcarga();
        }
      }
      catch (err) { console.log(err); }
    });
  }

  subscripcionParametros() {
    this.store.select('estadoparametros').subscribe(estado => {
      try {
        if (!estado.loading) {
          this.cargarstorage('SysParametros', estado.parametros);
          this.opcionessincronziacion[3].terminado=true;
          this.terminarcarga();
        }
      }
      catch (err) { console.log(err); }
    });
  }

  //manejando storage para guardar datos locales!
  cargarstorage(keystorage: string, data: any) {
    this.storage.set(keystorage, ((data)));
    //console.log('grabando storage'+keystorage, data);
  }

  //obteniendo datos del storage!
  obtenerdatostorage() {
    try {
      this.storage.get('SysConceptos').then((val) => {
        this.conceptos = val;
        console.log('Consultando storage conceptos', val);
      });

      this.storage.get('SysClientes').then((val) => {
        this.clientes = val;
        console.log('Consultando storage clientes', val);
      });

      this.storage.get('SysPrecios').then((val) => {
        this.precios = val;
        console.log('Consultando storage precios', val);
      });

      this.storage.get('SysParametros').then((val) => {
        this.paramatros = val;
        console.log('Consultando storage parametros', val);
      });
    }
    catch (err) {
      return ;
    }
  } 

}

