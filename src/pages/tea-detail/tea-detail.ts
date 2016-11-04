import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-tea-detail',
  templateUrl: 'tea-detail.html'
})
export class TeaDetail {

  tea: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.tea = this.navParams.get('tea');
  }

}
