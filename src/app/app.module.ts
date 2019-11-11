import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeichartComponent } from './peichart/peichart.component';
import { ChartwrapperComponent } from './chartwrapper/chartwrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PeichartComponent,
    ChartwrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
