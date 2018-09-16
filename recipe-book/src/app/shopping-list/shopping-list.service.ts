import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

    ingredientEvent = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('Tomatoes', 10)
    ];


    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        
        this.ingredientEvent.next(this.getIngredients()); 
    }

    addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientEvent.next(this.getIngredients());
    }
}