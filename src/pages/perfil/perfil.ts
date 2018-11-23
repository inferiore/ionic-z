import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  strnombre: string;
  strvendedor: string;
  strbu: string;
  strbodega: string;
  strpassword: string;
  strconfirmpassword: string;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.consultandostore();
  }

  consultandostore() {
    this.storage.get('strnombre').then((val) => {
      this.strnombre = val;
    });
    this.storage.get('strvendedor').then((val) => {
      this.strvendedor = val;
    });
    this.storage.get('strbu').then((val) => {
      this.strbu = val;
    });
    this.storage.get('strbodega').then((val) => {
      this.strbodega = val;
    });
    this.storage.get('strpassword').then((val) => {
      this.strpassword = val;
    });
    this.storage.get('strconfirmpassword').then((val) => {
      this.strconfirmpassword = val;
    });
  }

  actualizarstore() {
    if (this.validar()) {
      this.storage.set('strnombre', this.strnombre);
      this.storage.set('strvendedor', this.strvendedor);
      this.storage.set('strbu', this.strbu);
      this.storage.set('strbodega', this.strbodega);
      this.storage.set('strpassword', this.strpassword);
      this.storage.set('strconfirmpassword', this.strconfirmpassword);
      this.closepagina();
    }

  }

  validar(): boolean {
    if (!this.passwordiguales()) {
      this.showAlertok('validación', 'password no coincide');
      return false;
    }
    return true;
  }

  showAlertok(stitle: string, ssubtitle: string) {
    let alert = this.alertCtrl.create({
      title: stitle,
      subTitle: ssubtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  passwordiguales(): boolean {
    if (this.strpassword == this.strconfirmpassword) {
      return true;
    }
    else {
      return false;
    }
  }

  closepagina() {
    //this.navCtrl.setRoot(HomePage);
    //this.navCtrl.popToRoot();
    this.navCtrl.pop();
  }
}
