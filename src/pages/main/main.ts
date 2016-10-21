import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TEAS } from '../../providers/tea-data';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class Main {
  teas: Array<Object> = TEAS;

  ionViewDidLoad() {
    this.teas;
  }
}
