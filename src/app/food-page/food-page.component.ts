import { CartService } from './../services/cart.service';
import { FoodService } from './../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from './../shared/models/food';
import { Component } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent {
  food!: Foods;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    ActivatedRoute.params.subscribe((params: any) => {
      if (params['id']) this.food = foodService.getFoodById(params['id']);
    });
  }
  ngOnInit(): void {}
  addToCart() {
    this.cartService.addTocart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
