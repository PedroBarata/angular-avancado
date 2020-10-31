import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureAModule} from './pages/feature-a/feature-a.module';
import { FirstSharedComponentComponent } from './shared/components/first-shared-component/first-shared-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSharedComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
