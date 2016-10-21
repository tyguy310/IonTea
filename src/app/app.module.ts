import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Main } from '../pages/main/main';
import { Cart } from '../pages/cart/cart';
import {TEAS} from '../providers/tea-data';


@NgModule({
  declarations: [
    MyApp,
    Main,
    Cart
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Main,
    Cart
  ],
  providers: []
})
export class AppModule {}
