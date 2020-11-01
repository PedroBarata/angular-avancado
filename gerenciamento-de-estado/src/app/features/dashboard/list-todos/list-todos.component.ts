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
    this.listTodosService.list$.subscribe(list => this.list = list);
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id).subscribe((todo) => {
      this.list = this.list.map((item) => (item.id === todo.id ? todo : item));
    });
  }

  onDelete(id: number) {
    this.todosService.remove(id).subscribe(() => {
      this.list = this.list.filter((item) => item.id !== id);
    });
  }

  loadMore() {
    this.listTodosService.page++;
    this.todosService.getList(this.listTodosService.page).subscribe((list) => {
      const newlist = [...this.list, ...list];
      this.listTodosService.list = newlist;
    });
  }
}
