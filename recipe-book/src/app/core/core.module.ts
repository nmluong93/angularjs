import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    exports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService],
})
export class CoreModule {

}