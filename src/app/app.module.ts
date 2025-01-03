import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { ManComponent } from './man/man.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ManComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
