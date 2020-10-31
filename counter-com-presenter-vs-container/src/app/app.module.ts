import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureAModule } from './pages/feature-a/feature-a.module';
import { FeatureBModule } from './pages/feature-b/feature-b.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FeatureAModule,
    FeatureBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
