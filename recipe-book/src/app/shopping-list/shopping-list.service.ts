import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

  ingredientEvent = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    this.ingredientEvent.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientEvent.next(this.getIngredients());
  }
  updateIngredient(index: number, edittedIngre: Ingredient) {
    this.ingredients[index] = edittedIngre;
    this.ingredientEvent.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientEvent.next(this.ingredients.slice());
  }

}
