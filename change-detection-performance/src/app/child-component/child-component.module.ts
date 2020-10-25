import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './child-component.component';
import { ChildComponent3Component } from './child-component3/child-component3.component';

@NgModule({
  declarations: [ChildComponentComponent, ChildComponent3Component],
  imports: [
    CommonModule
  ],
  exports: [ChildComponentComponent]
})
export class ChildComponentModule { }
