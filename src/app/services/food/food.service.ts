import { Tag } from './../../shared/models/Tag';
import { Injectable } from '@angular/core';
import { Foods } from './../../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id);
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chinese Noodles',
        price: 9,
        cookTime: '40-50',
        favorite: true,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food1.jpeg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Veg Pzza',
        price: 12,
        cookTime: '40-50',
        favorite: false,
        origins: ['Spain'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food2.jpeg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Veg Pzza',
        price: 20,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food3.jpeg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: 4,
        name: 'Veg Pzza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Maldives'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food4.jpeg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: 5,
        name: 'Veg Pzza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food5.jpeg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Veg Pzza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food6.jpeg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Veg Pzza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food7.jpeg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Veg Pzza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food8.jpg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
