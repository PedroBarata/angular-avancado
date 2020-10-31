import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootBComponentComponent } from './containers/root-b-component/root-b-component.component';
import { ChildBComponentComponent } from './components/child-b-component/child-b-component.component';



@NgModule({
  declarations: [ChildBComponentComponent, RootBComponentComponent],
  imports: [
    CommonModule
  ],
   /* O certo seria ter um router e não exportar diretamente os componentes desse module, porém,
  para exemplificar a abordagem de presenter vs container, foi feito isso */
  exports: [RootBComponentComponent]
})
export class FeatureBModule { }
