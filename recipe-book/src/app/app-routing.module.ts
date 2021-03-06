import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from './core/home/home.component';




const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //lazy loading
    { path : 'recipes', loadChildren : './recipes/recipes.module#RecipeModule'},
    { path: 'shopping-list', component: ShoppingListComponent },
];
 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}