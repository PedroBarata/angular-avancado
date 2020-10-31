import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootFeatureBComponent } from './containers/root-feature-b/root-feature-b.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RootFeatureBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootFeatureBComponent
      }
    ]),
    ComponentsModule,
  ]
})
export class FeatureBModule { }
