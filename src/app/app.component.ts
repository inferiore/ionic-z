import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, NavPush } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { WebviewPage } from '../pages/webview/webview';

import { AjustesPage } from '../pages/ajustes/ajustes';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AppStore } from "../app/app.store";
import { Store } from "@ngrx/store";
import { LoginChangeAction, ListAction } from "../rdxuser/user.reducer";
import { PedidosPage } from '../pages/pedidos/pedidos';
import { SincronizarPage } from '../pages/sincronizar/sincronizar';
import { Subscription } from 'rxjs';
import { User } from '../rdxuser/user';
import { UserListPage } from '../pages/user-list/user-list';
import { RecordpedidoPage } from '../pages/recordpedido/recordpedido';


@Component({
  templateUrl: 'app.html',
   styles: ['.transparent-body {  background: none transparent !important;opacity: 0 !important;}']
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = RecordpedidoPage;
  pages: Array<{ title: string, component: any, icono: any }>;

  private user: User;
  private userStateSubscription: Subscription;
  private nameuser: string = '';
  private emailuser: string = '';
  private imagenuser: string = "../../assets/imgs/user.png";


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    , private store: Store<AppStore>) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    ];

    this.userStateSubscription = this.store.select('userState').subscribe(userState => {
      try {
        this.user = userState.user;
        this.nameuser = this.user.given_name;
        this.emailuser = this.user.preferred_username;
        console.log('imprimendo datos de usuario:', this.emailuser, this.nameuser);
        if(userState.user.role=='administrator'){
          this.pages=[
            { title: 'Principal', component: HomePage, icono: 'home' },
            { title: 'Perfil', component: PerfilPage, icono: 'person' },
            { title: 'Configuración', component: AjustesPage, icono: 'build' },
            { title: 'Cambiar usuario', component: LoginPage, icono: 'contact' },
            { title: 'Sincronizar', component: SincronizarPage, icono: 'options' },
            { title: 'Seleccionar', component: UserListPage, icono: 'people' }
          ]
        }else{
          this.pages=[
            { title: 'Principal', component: HomePage, icono: 'home' },
            { title: 'Perfil', component: PerfilPage, icono: 'person' },
            { title: 'Configuración', component: AjustesPage, icono: 'build' },
            { title: 'Cambiar usuario', component: LoginPage, icono: 'contact' },
            { title: 'Sincronizar', component: SincronizarPage, icono: 'options' }
          ]
        }
      }
      catch (err) { }
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.component == LoginPage) {
      console.log('disparando nueva accion loginchange');
      this.store.dispatch(new LoginChangeAction());
    }
    if(page.component == UserListPage){
      console.log('disparando nueva ListAction');
      this.store.dispatch(new ListAction());
    }

    if (page.component == HomePage) {
      this.nav.setRoot(HomePage);
    }
    else {
      this.nav.push(page.component);
    }
  }

}
