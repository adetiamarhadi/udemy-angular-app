import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Recipe Name', 'This is recipe', 'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg'),
    new Recipe('Recipe Name 2', 'This is second recipe', 'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
