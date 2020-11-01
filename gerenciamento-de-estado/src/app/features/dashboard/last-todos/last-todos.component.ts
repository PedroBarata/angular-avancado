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
    
      if (!this.listTodosService.list) {
        this.todosService.getList(0).subscribe((list) => {
          this.list = list;
          this.listTodosService.list = list;
        });
      } else {
        this.list = this.listTodosService.list.slice(0, 10);
      }
   
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id).subscribe((todo) => {
      this.list = this.list.map((item) => (item.id === todo.id ? todo : item));
    });
  }

}
