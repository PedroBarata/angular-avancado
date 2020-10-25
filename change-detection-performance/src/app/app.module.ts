import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';
import { ChildComponentModule } from './child-component/child-component.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent2Component
  ],
  imports: [
    BrowserModule,
    ChildComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
