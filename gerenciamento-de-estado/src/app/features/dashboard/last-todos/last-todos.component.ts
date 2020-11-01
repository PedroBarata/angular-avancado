import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';
import { ListTodosService } from '../services/list-todos.service';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss'],
})
export class LastTodosComponent implements OnInit {
  list: Todo[];

  constructor(
    private todosService: TodosService,
    private listTodosService: ListTodosService
  ) {}

  /* Não está ouvindo as alterações que vem do serviço, com isso, nao atualizamos o DOM aqui */
  ngOnInit() {
    this.listTodosService.list$.subscribe((list) => {
      if (!list || !list.length) {
        this.todosService.getList(0).subscribe((list) => {
          /* Como estamos trabalhando reativamente agora, 
          não faz sentido a linha abaixo, pois o listTodoService rodará o set, 
          o que chamará novamente esse subscribe */
          //this.list = list;

          /* Isso fará com que rode o 'set' e disparará mais um evento de next */
          this.listTodosService.list = list;
        });
      } else {
        this.list = list.slice(0, 10);
      }
    });
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id).subscribe((todo) => {
      this.list = this.list.map((item) => (item.id === todo.id ? todo : item));
    });
  }
}
