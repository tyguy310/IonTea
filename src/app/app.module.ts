import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { Main } from '../pages/main/main';
import { Cart } from '../pages/cart/cart';
import { TeaDetail } from '../pages/tea-detail/tea-detail';
import { CaffeineScale } from '../pages/caffeine-scale/caffeine-scale';
import { CartService } from '../providers/cart.service'

@NgModule({
  declarations: [
    MyApp,
    Main,
    Cart,
    TeaDetail,
    CaffeineScale
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Main,
    Cart,
    TeaDetail,
    CaffeineScale
  ],
  providers: []
})
export class AppModule {}
