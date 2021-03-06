import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) { }

    private recipes: Recipe[] = [
        new Recipe('Test recipe', 'Just a test',
            'https://is4-ssl.mzstatic.com/image/thumb/Purple69/v4/be/f5/09/bef509f4-cde4-51ab-c342-d85cb5782dc2/mzl.djvirgwa.jpg/643x0w.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('French fries', 2)
            ]),
        new Recipe('Second test recipe', 'Also test',
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
            [
                new Ingredient('buns', 1),
                new Ingredient('meat', 3)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    onAddToShoppingList(recipe: Recipe) {
        this.slService.addIngredients(recipe.ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
