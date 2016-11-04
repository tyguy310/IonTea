import { Component } from '@angular/core';
import { NavController, ViewController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-caffeine-scale',
  templateUrl: 'caffeine-scale.html'
})
export class CaffeineScale {
  caffScale: any;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.caffScale = this.navParams.get('tea');
  }

  close(){
  this.view.dismiss();
}
}
