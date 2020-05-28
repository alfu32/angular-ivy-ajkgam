import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OpampComponent } from './opamp/opamp.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ResistorComponent } from './resistor/resistor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    OpampComponent,
    TerminalComponent,
    ResistorComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
