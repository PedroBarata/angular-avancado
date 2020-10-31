import { Component, OnInit } from '@angular/core';
import { FeatureAService } from '../../../../shared/services/feature-a.service';
import { User } from '../../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root-a-component',
  templateUrl: './root-a-component.component.html',
  styleUrls: ['./root-a-component.component.css'],
})

/**
 * Neste container, temos duas abordagens:
 * 1- Usarmos o próprio Observable (user$)
 *
 *    a. Como utilizamos apenas a referencia do nosso observable,
 *        podemos utilizar a mesma ideia em outros componentes, onde a mudança é pontual (na store ou no serviço).
 *        Essa abordagem é interessante pois o Angular que ficará responsável de fazer o
 *        subscribe e unsubscribe do evento (usando uma programação mais reativa) com o | async no html
 *        além disso,
 * 2-  Usarmos o valor retornado pelo Observable (user)
 *    a. Caso estivermos usando um modulo http ou algo que complete o nosso Observable,
 *        podemos usar o primeiro valor retornado pelo Observable diretamente.
 * */
export class RootAComponentComponent implements OnInit {
  user: User;
  user$: Observable<User>;

  constructor(private aService: FeatureAService) {}

  ngOnInit(): void {
    this.aService.getUserComplete().subscribe((user) => {
      this.user = user;
    });

    /* Neste caso, podemos ainda adicionar novas propriedades com o .pipe */
    this.user$ = this.aService
      .getUserNotComplete()
      .pipe(map((user) => ({ ...user, age: 20 })));
  }
}
