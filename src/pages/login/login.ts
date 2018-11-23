import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HomePage } from "../home/home"


//utilizando clases para Redux
import { AppStore } from "../../app/app.store";
import { Store } from "@ngrx/store";
import { LoginAction, LocalLoginAction } from "../../rdxuser/user.reducer";
import { Subscription } from "rxjs";
import { Platform } from 'ionic-angular';
import { WebviewPage } from '../webview/webview';
import { ConfigPage } from '../config/config';
import { Vibration } from '@ionic-native/vibration';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  private username: string = 'CALIXTO';//'ebarrios@zeus.co';//
  private password: string =  '1261121122221222'//'Zeustec18*'; //
  private error: any;
  private userStateSubscription: Subscription;
  private messageerror:string;
  public press: number = 0;
  public swipe: number = 0;

  constructor(private platform: Platform, public menu: MenuController, public navParams: NavParams, private navCtrl: NavController,
    private store: Store<AppStore>, private vibration:Vibration,private _storage:Storage,public toastCtrl: ToastController) { 
     
    }
  pressEvent() {
    this.press++;
    this.vibration.vibrate([1000,1000]);
    this.lauch();    
  }   
  lauch(){
    if(this.press>=1){
      this.navCtrl.push(ConfigPage);
    }
  }

  swipeEvent() {
    this._storage.get('local_user').then((user) => {
      if(user!=null){
        this.swipe++;
        if(this.swipe%2!=0){
          this.showToast('middle','Login externo')
        }else{
          this.showToast('middle','Login normal')
        }
      }
    })
  }
 
  ionViewDidLoad() {  
   }
  ionViewDidEnter() {   
    this.userStateSubscription = this.store.select('userState').subscribe(userState => {
      this.error = userState.error;
      if (userState.loading == false && userState.error == false && userState.user!=null) {
        this.enter();
      }else {
        this.messageerror=userState.mensaje;
        if(userState.mensaje.length>0){
        alert(userState.mensaje)
        }
      }
    });
  }
  enter(){
   this.navCtrl.setRoot(HomePage);
  }
  GoToWebview(){
   this.navCtrl.push(WebviewPage);
  }
  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }

  login() {
    this._storage.get('OuthCredencial').then((outh) => {
       if(outh!=null){
        this._storage.get('local_user').then((user) => {
          if(user!=null && this.swipe%2==0){
            console.log("making local login,",this.username, this.password,user.username,user.password)
            this.store.dispatch(new LocalLoginAction(this.username, this.password));
          }else{
            console.log("making external login,",this.username, this.password)
            this.store.dispatch(new LoginAction(this.username, this.password));
          }          
        })
        
       }else{
         alert("Por favor configure los datos de autenticacion");
       }
       
     });
   
  }

  exitApp() {
    this.platform.exitApp();
  }

  showToast(position: string,mssg:string) {
    let toast = this.toastCtrl.create({
      message: mssg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
