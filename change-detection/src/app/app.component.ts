import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-my-child [value]="value"></app-my-child>
    <button (click)="0">Click</button>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Dessa forma, não há uma chamada direta de alteração do 'value', portanto, 
   * o Change Detection só é chamado ao clicar no botão
   * ao realizar a checagem, entre a primeira e a segunda do double-check, 
   * esse valor é alterado e gerará um erro.
   * 
   * Soluções: Inúmeras.
   * 1 - Trocar para uma função no click, já que é um evento do Angular;
   * 2 - Usar o NgZone;
   * 3 - "Forçar" a chamada do Change Detection (com uma implementação de DoCheck ou qualquer outro hook que chame o Change Detection);
   */
  get value(): number {
    return Math.floor(Math.random() * 10);
  }

}
