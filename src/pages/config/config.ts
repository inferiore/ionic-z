import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OuthCredencial} from "../../models/OuthCredencial";
import { Storage } from '@ionic/storage';
import { LoginPage}from "../login/login"
/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  config:OuthCredencial={clientId:"",grantType:"",scope:""};
  constructor(public navCtrl: NavController, public navParams: NavParams,private _storage:Storage ) {
    this._storage.get('OuthCredencial').then((val) => {
      if(val!=null){
        this.config=val;
      }
      this.config={clientId:"Development",grantType:"password",scope:"openid offline_access WebAPI profile roles"};
    });
   
  }

  save(){
    this._storage.set("OuthCredencial",this.config)
    this.navCtrl.setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }


}
