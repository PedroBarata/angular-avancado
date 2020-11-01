import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../../shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';

@Injectable()
export class ListTodosService {
  /* Criamos uma 'interface' onde os componentes que 
    usam tem acesso apenas aos metodos abaixo */

  /* Nao estamos expondo o subject pois esse é o unico
    lugar que estará atualizando os valores da lista */
  private _listSubject = new BehaviorSubject<Todo[]>([]);
  page = 0;

  constructor(private todosService: TodosService) {}

  /* Colocamos asObservable 
    pois não queremos que outros lugares usem o "next" 
    para atualizar e repassar informação */
  get list$(): Observable<Todo[]> {
    return this._listSubject.asObservable();
  }

  set list(value: Todo[]) {
    this._listSubject.next(value);
  }

  create(title: string) {
    this.todosService.create({ title }).subscribe((todo) => {
      this.list = [todo, ...this._listSubject.value];
    });
  }

  getList(page: number) {
    this.todosService.getList(page).subscribe((list) => {
      if (page === 0) {
        this.list = list;
      } else {
        this.list = [...this._listSubject.value, ...list];
      }
    });
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id).subscribe((todo) => {
      this.list = this._listSubject.value.map((item) =>
        item.id === todo.id ? todo : item
      );
    });
  }

  delete(id: number) {
    this.todosService.remove(id).subscribe(() => {
      this.list = this._listSubject.value.filter((item) => item.id !== id);
    });
  }

  loadMore() {
    this.page++;
    this.todosService.getList(this.page).subscribe((list) => {
      const newlist = [...this._listSubject.value, ...list];
      this.list = newlist;
    });
  }
}
