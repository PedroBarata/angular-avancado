import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSharedComponentComponent } from './first-shared-component/first-shared-component.component';

@NgModule({
  declarations: [FirstSharedComponentComponent],
  imports: [CommonModule],
  exports: [FirstSharedComponentComponent],
})
export class ComponentsModule {}
