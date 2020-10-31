import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureAService {

  constructor() { }
  /* Neste caso, faremos uma lógica parecida ao que o módulo http faz, 
    completando o subsribe */

  getUserComplete(): Observable<User> {
    return new Observable((subscriber) => {
      subscriber.next({
        firstName: 'John',
        lastName: 'Doe'
      });
      subscriber.complete;
    })
  }

   /* Caso quisessemos fazer algo reativo, usando store ou 
   com mais de um componente acessando o valor, não completaríamos o subscribe */
  getUserNotComplete(): Observable<User> {
    return new Observable((subscriber) => {
      subscriber.next({
        firstName: 'John',
        lastName: 'Doe'
      });
    })
  }
}
