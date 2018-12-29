
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/Http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
