import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  subscription : Subscription;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ingredients : Ingredient [];
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientEvent.subscribe ((ingrs : Ingredient[]) => {
      this.ingredients  = ingrs;
    });
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
