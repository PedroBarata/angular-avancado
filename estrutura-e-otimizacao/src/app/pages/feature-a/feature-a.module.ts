import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RootFeatureAComponent } from './containers/root-feature-a/root-feature-a.component';
import { ContentAComponent } from './components/content-a/content-a.component';
import { ContentBComponent } from './components/content-b/content-b.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { RootContentCComponent } from './features/content-c/containers/root-content-c/root-content-c.component';
import { ContentCChildComponent } from './features/content-c/components/content-c-child/content-c-child.component';

/**
 * Podemos separar as rotas em um arquivo em separado, 
 * mas como não são muitas, podemos deixar dentro do módulo
 */
@NgModule({
  declarations: [
    RootFeatureAComponent, 
    ContentAComponent,
    ContentBComponent,
    ContentAChildComponent,
    RootContentCComponent,
    ContentCChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootFeatureAComponent,
        children: [
          { path: '', component: ContentAComponent},
          { path: 'b', component: ContentBComponent},
        ]
      }
    ]),
    ComponentsModule
  ]
})
export class FeatureAModule { }
