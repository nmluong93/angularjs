import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  ngOnDestroy() {
    this.subscription.unsubscribe();
   }

  indexEdittedItem: number;
  editMode = false;
  subscription: Subscription;
  edittedIngredient: Ingredient;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.indexEdittedItem = index;
        this.editMode = true;
        this.edittedIngredient = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.edittedIngredient.name,
          amount: this.edittedIngredient.amount
        })
      }
    );
  }

  onAddItem(ngForm: NgForm) {
    const value = ngForm
      .value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.indexEdittedItem, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    ngForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.indexEdittedItem);
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
