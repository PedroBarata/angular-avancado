import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../../shared/models/todo.model';

@Injectable()
export class ListTodosService {
    /* Criamos uma 'interface' onde os componentes que 
    usam tem acesso apenas aos metodos abaixo */

    /* Nao estamos expondo o subject pois esse é o unico
    lugar que estará atualizando os valores da lista */
    private _listSubject = new BehaviorSubject<Todo[]>([]);

    page = 0;
    /* Colocamos asObservable 
    pois não queremos que outros lugares usem o "next" 
    para atualizar e repassar informação */
    get list$(): Observable<Todo[]> {
        return this._listSubject.asObservable();
    }

    set list(value: Todo[]) {
        this._listSubject.next(value);
    }

}