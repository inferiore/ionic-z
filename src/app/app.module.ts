
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, Item, Option } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { PerfilPage } from '../pages/perfil/perfil';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PedidosPage} from '../pages/pedidos/pedidos'
import {RecordpedidoPage} from '../pages/recordpedido/recordpedido'
import {ItemPage} from '../pages/item/item'
import {BuscarPage} from '../pages/buscar/buscar'
import { IonicStorageModule,Storage } from '@ionic/storage';

import {StoreModule} from "@ngrx/store";
import {EffectsModule, Actions} from "@ngrx/effects";
import {HttpModule, Http} from "@angular/http";

import {userReducer} from "../rdxuser/user.reducer";
import {BuscarReducer} from "../rdxbuscar/ReducerBuscar";
import {UserService} from "../rdxuser/user.service";
import {UserEffects} from "../rdxuser/user.effects";

import {PedidoReducer} from "../rdxpedidos/ReducerPedido";
import {PedidoService} from "../rdxpedidos/pedido.service";
import {PedidosEffects} from "../rdxpedidos/pedido.effects";


import { ZformatDirective } from '../directives/zformat/zformat';
import { ZeusDirective } from '../directives/zeus/zeus';


import { BrMaskerModule } from 'brmasker-ionic-3';
import {UppercaseDirective} from '../directives/uppercase/uppercase'
import { SyncEffects } from '../redux/z.effects';
import { conceptos,clientes,parametrosdeusuarios,precios } from '../redux/zclases';
import { conceptoReducer, clientesreducer, preciosreducer, parametrosreducer,ArticulosReducer } from '../redux/z.reducer';
import { SyncService } from '../redux/z.service';
import { SincronizarPage } from '../pages/sincronizar/sincronizar';
import { WebviewPage }         from '../pages/webview/webview'
import { ConfigPage } from '../pages/config/config';


// plugins
import { QRScanner } from '@ionic-native/qr-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Vibration } from '@ionic-native/vibration';

import { InappBrowerPage } from '../pages/inapp-brower/inapp-brower';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ZeusHttpClient } from '../services/zeusHttpClient';
import {Outh2Service} from "../services/outh2.service";
import { TokenInterceptor } from '../interceptors/token.interterceptor';
import { UserListPage } from '../pages/user-list/user-list';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserListPage,
    AjustesPage,
    PerfilPage,
    PedidosPage,
    RecordpedidoPage,
    SincronizarPage,
    ItemPage,
    BuscarPage,
    ZformatDirective,
    UppercaseDirective,
    WebviewPage,
    ConfigPage,
    InappBrowerPage,
    ZeusDirective,
    ],
  imports: [
    BrowserModule,BrMaskerModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot({
                          userState: userReducer,
                          estadobusqueda: BuscarReducer,
                          listapedidos:PedidoReducer,
                          estadoconceptos:conceptoReducer,
                          estadoclientes:clientesreducer,
                          estadoprecios:preciosreducer,
                          estadoparametros:parametrosreducer,
                          estadoArticulos:ArticulosReducer,
                        }),
    IonicStorageModule.forRoot({name: '__mydb',driverOrder: ['websql', 'sqlite', 'indexeddb']}),
    EffectsModule.forRoot([UserEffects,PedidosEffects,SyncEffects]),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserListPage,
    AjustesPage,
    PerfilPage,
    PedidosPage,
    RecordpedidoPage,
    SincronizarPage,
    ItemPage,
    BuscarPage,   
    WebviewPage,
    InappBrowerPage,
    ConfigPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    PedidoService,
    SyncService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QRScanner,
    InAppBrowser,
    Vibration,
    ZeusHttpClient ,
    Outh2Service,
    {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true},
    
  ],
  exports: [
    ZformatDirective,
    ZeusDirective
  ]
})
export class AppModule {}
