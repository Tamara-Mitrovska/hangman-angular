import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { ManComponent } from './man/man.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HttpClientModule } from '@angular/common/http';
import { GameStatusComponent } from './game-status/game-status.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ManComponent,
    KeyboardComponent,
    GameStatusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
