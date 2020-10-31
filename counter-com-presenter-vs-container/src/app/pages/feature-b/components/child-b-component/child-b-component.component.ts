import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/* Com essa abordagem de presenter-vs-containers,
podemos usar uma propriedade de meta-dados: ChangeDetection 
*/
@Component({
  selector: 'app-child-b-component',
  templateUrl: './child-b-component.component.html',
  styleUrls: ['./child-b-component.component.css'],
})

/* Este componente é o presenter, ele é responsável por apenas APRESENTAR
a informação. Seus eventos apenas REPASSAM o valor para o componente pai (root-b-component) */
export class ChildBComponentComponent {
  @Input() count;
  @Output() inc = new EventEmitter<number>();
  @Output() dec = new EventEmitter<number>();

  onInc() {
    this.inc.emit();
  }

  onDec() {
    this.dec.emit();
  }
}
