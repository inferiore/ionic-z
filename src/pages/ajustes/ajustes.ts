import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  chkguardarcredenciales:boolean;
  chkreportarautomatico:boolean;
  strkeyactivacion:string;
  
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
    this.consultarstore();
  }

  consultarstore(){
    //opteniendo propiedad sis e guarda credenciales!
    this.storage.get('chkguardarcredenciales').then((val) => {
      this.chkguardarcredenciales=val;
    });

    //opteniendo propiedad sis e guarda credenciales!
    this.storage.get('chkreportarautomatico').then((val) => {
      this.chkreportarautomatico=val;
    });

    //opteniendo propiedad sis e guarda credenciales!
    this.storage.get('strkeyactivacion').then((val) => {
      this.strkeyactivacion=val;
    });
  }
  
  actualziaconfioguracion()
  {
    this.storage.set('chkguardarcredenciales',this.chkguardarcredenciales);
    this.storage.set('chkreportarautomatico',this.chkreportarautomatico);
    this.storage.set('strkeyactivacion',this.strkeyactivacion);    
    this.closepagina();
  }

  closepagina(){
    //this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
    this.navCtrl.pop();
  }
}
