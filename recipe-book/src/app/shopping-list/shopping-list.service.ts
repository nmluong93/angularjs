import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    ingredientEvent = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('Tomatoes', 10)
    ];


    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        
        this.ingredientEvent.emit(this.getIngredients()); 
    }

    addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientEvent.emit(this.getIngredients());
    }
}