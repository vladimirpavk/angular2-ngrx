import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      itemList: 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
