import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InappBrowerPage } from './inapp-brower';

@NgModule({
  declarations: [
    InappBrowerPage,
  ],
  imports: [
    IonicPageModule.forChild(InappBrowerPage),
  ],
})
export class InappBrowerPageModule {}
