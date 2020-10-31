import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ChildBComponentComponent } from '../../components/child-b-component/child-b-component.component';

@Component({
  selector: 'app-root-b-component',
  templateUrl: './root-b-component.component.html',
  styleUrls: ['./root-b-component.component.css']
})

/* Este componente é o container, ele é responsável por gerenciar, 
atualizar e guardar o estado */
export class RootBComponentComponent implements DoCheck {
  @ViewChild(ChildBComponentComponent, {static: false}) childComponent: ChildBComponentComponent;
  count = 0;

  /* Método para entendermos o ciclo de atualização de valores 
  com a estratégia presenter vs container */
  ngDoCheck(): void {
    if(!!this.childComponent) {
      console.log(`Parent counter: ${this.count} \n Child counter: ${this.childComponent.count}`)
    }
  }

  handleInc() {
    this.count++;
  }

  handleDec() {
    this.count--;
  }

}
