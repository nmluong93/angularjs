import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test recipe', 'Just a test' , 'https://is4-ssl.mzstatic.com/image/thumb/Purple69/v4/be/f5/09/bef509f4-cde4-51ab-c342-d85cb5782dc2/mzl.djvirgwa.jpg/643x0w.jpg'),
    new Recipe('Second test re','Also test','data:image/jpeg;base64,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')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe) {
     this.recipeWasSelected.emit(recipe);
  }
}
