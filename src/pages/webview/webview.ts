import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
// import {InappBrowerPage} from '../pages/inapp-brower';

/**
 * Generated class for the WebviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//how to use it?
/*https://github.com/bitpay/cordova-plugin-qrscanner/issues/147*/
@IonicPage()
@Component({
  selector: 'page-webview',
  templateUrl: 'webview.html',
  
})
export class WebviewPage {
	qrCode:string="no se ha detectado nada";
 	constructor(public navCtrl: NavController, public navParams: NavParams
  	,private qrScanner: QRScanner
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebviewPage');
    console.info('ionViewDidLoad WebviewPage');
    console.warn('ionViewDidLoad WebviewPage');
    this.readQr();
    
  }

  readQr(){
	this.qrScanner.prepare()
	  .then((status: QRScannerStatus) => {
	     if (status.authorized) {
	       // camera permission was granted
	        this.qrScanner.show();
	        window.document.querySelector('ion-app').classList.add('transparent-body');
	       // start scanning
	       console.log('Acceso concedido, se intentara leer el codigo');
	       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
	         console.log('Scanned something', text);
	         this.qrCode=text;
	         alert(text);
	         this.qrScanner.hide(); // hide camera preview
	         scanSub.unsubscribe(); // stop scanning
	         window.document.querySelector('ion-app').classList.remove('transparent-body');
	    
	       });

	     } else if (status.denied) {
	     	alert('debe permitir el acceso, para proceder a leer el codigo QR');
	       // camera permission was permanently denied
	       // you must use QRScanner.openSettings() method to guide the user to the settings page
	       // then they can grant the permission from there
	     } else {
	       // permission was denied, but not permanently. You can ask for permission again at a later time.
	     }
	  })
	  .catch((e: any) => {
	  	//console.error('Error is', e);
	  	alert(e);
	  	this.qrCode=e;

	  	}

	    );
	}
}	  

