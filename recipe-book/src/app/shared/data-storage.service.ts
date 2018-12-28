import { Injectable } from "@angular/core";
import { Http } from "@angular/Http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-eb401.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ng-recipe-book-eb401.firebaseio.com/recipes.json')
            .pipe(map(
                response => {
                    const data: Recipe[] = response.json();
                    for(let rec of data) {
                        if(!rec['ingredients']) {
                            rec['ingredients'] = [];
                        }
                    }
                    return data;
                }
            ))
            .subscribe(
                (recipes : Recipe[]) => {
                   this.recipeService.setRecipes(recipes);
                }
            )

    }
}