import { FoodService } from './../services/food/food.service';
import { CartItem } from './../shared/models/CartItem';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;
  constructor(
    private cartService: CartService,
    private foodService: FoodService
  ) {
    let foods = foodService.getAll();
    cartService.addTocart(foods[1]);
    cartService.addTocart(foods[3]);
    cartService.addTocart(foods[5]);

    this.setCart();
  }

  ngOnInit(): void {}

  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartitem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartitem.food.id, quantity);
    this.setCart();
  }
}
