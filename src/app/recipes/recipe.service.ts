import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Coffee Latte',
      'A Good Coffee Latte for Your Amazing Day',
      'https://www.bermberm.com/wp-content/uploads/2018/09/Cafe-latte-Berm-Berm-Coffees.jpg',
      [
        new Ingredient('Espresso', 1),
        new Ingredient('Fresh Milk', 1)
      ]),
    new Recipe(
      'Macchiato Coffee',
      'A Perfect Combination Coffee and Caramel',
      'https://www.caffesociety.co.uk/assets/recipe-images/macchiato-small.jpg',
      [
        new Ingredient('Espresso', 1),
        new Ingredient('Fresh Milk', 1),
        new Ingredient('Caramel', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
