import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAComponentComponent } from './components/child-a-component/child-a-component.component';
import { RootAComponentComponent } from './containers/root-a-component/root-a-component.component';
import { FeatureAService } from '../../shared/services/feature-a.service';

@NgModule({
  declarations: [ChildAComponentComponent, RootAComponentComponent],
  imports: [
    CommonModule
  ],
  providers: [FeatureAService],
  /* O certo seria ter um router e não exportar diretamente os componentes desse module, porém,
  para exemplificar a abordagem de presenter vs container, foi feito isso */
  exports: [RootAComponentComponent]
})
export class FeatureAModule { }
