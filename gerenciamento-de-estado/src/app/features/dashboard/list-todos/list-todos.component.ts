import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';
import { ListTodosService } from '../services/list-todos.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
})
export class ListTodosComponent implements OnInit {
  list: Todo[];
  constructor(
    private todosService: TodosService,
    private listTodosService: ListTodosService
  ) {}

  ngOnInit() {
    this.listTodosService.list$.subscribe((list) => (this.list = list));
  }

  markAsDone(id: number) {
    this.listTodosService.markAsDone(id);
  }

  onDelete(id: number) {
    this.listTodosService.delete(id);
  }

  loadMore() {
    this.listTodosService.loadMore();
  }
}
