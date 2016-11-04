import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TEAS } from '../../providers/tea-data';
import { TeaDetail } from '../tea-detail/tea-detail';
import { CartItem } from './shopping-cart'

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class Main {
  selectedItem: any;
  teas: any;
  shoppingCart = [];
  qty: number;
  exists = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.qty = 1
  }

  ionViewDidLoad() {
    this.teas = TEAS.map((tea) => {
      if (tea.inStock === true) {
          tea.inStock = 'Yes'
      }
      else {
        tea.inStock = 'No'
      }
      tea.price = tea.price/100
      return tea
    })
  }

  addToCart(name, price) {
    var cartItem: CartItem = {name: name, quantity: this.qty, price: price}
    this.shoppingCart.push(cartItem)
  }

  checkCart(tea) {
    this.exists = this.shoppingCart.filter(element => {
      return element.name == tea.name
    })
    if(!this.exists.length) {
      this.addToCart(tea.name, tea.price)
    }
    else {
      console.log(typeof this.exists[0].quantity)
      console.log(typeof this.qty)
      this.exists[0].quantity += this.qty
    }
    console.log(this.shoppingCart)
  }

  viewItem(tea){
    this.navCtrl.push(TeaDetail, {tea});
  }
}
