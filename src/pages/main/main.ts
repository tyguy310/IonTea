import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TEAS } from '../../providers/tea-data';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class Main {
  selectedItem: any;
  teas: Array<Object>;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.teas = TEAS
    console.log(this.teas)
  }
}
