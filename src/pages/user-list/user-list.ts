import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../rdxuser/user.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app/app.store';
import { ListAction, SelectAction, LoginAction, LoginChangeAction } from '../../rdxuser/user.reducer';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { writeToNodes } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  users:any;
  private userStateSubscription: Subscription;
  constructor(public navCtrl: NavController, public navParams: NavParams,private store: Store<AppStore>,private _storage:Storage  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
    this.store.dispatch(new ListAction());
    this.userStateSubscription = this.store.select('userState').subscribe(userState => {
        this.users = userState.users;
        // console.log(userState.loading,userState.user,userState.error)
        if(!userState.loading&& !userState.error && userState.user   ){
          console.log("grabar en el storage:",userState.user);
          this._storage.set("local_user",userState.user);   
          this.navCtrl.setRoot(LoginPage);       
        }        
    });
  }
  userSelected(item:any){
    this.store.dispatch(new SelectAction(item.Login));   
    
  }
  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }

/*  hi for all, 
how to get the client_id that genereted a bearer token? (.NetCore2.1, IdentityServer4)
exist one way to get the client_id  if in the request i have a bearer token? 
i working with netcore2.1 and identity server with Resource owner password flow
the problem is that i not know what client make a request? 
or exists in database the relations client_id,token,user_id?
i need it for save in database and make a report

Obtener client_id que genero el bearer token (.NetCore2.1, IdentityServer4)

Hola a todos,
Actualmente trabajo en .NetCore 2.1, identity server 4 y bajo el flujo de propietario del recurso (Resource owner password)
existe alguna forma de obtener el client_id en una petición si solo tengo el bearer token?
o en la base de datos se encuentra la relación client_id,token,user_id?

*/
}
