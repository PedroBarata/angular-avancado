import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
})
export class ListTodosComponent implements OnInit {
  list: Todo[];
  page = 0;
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getList(0).subscribe(list => this.list = list);
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id).subscribe((todo) => {
      this.list = this.list.map((item) => (item.id === todo.id ? todo : item));
    });
  }

  onDelete(id: number) {
    this.todosService.remove(id).subscribe(() => {
      this.list = this.list.filter(item => item.id !== id);
    });
  }

  loadMore() {
    this.page++;
    this.todosService
      .getList(this.page)
      .subscribe((list) => (this.list = [...this.list, ...list]));
  }
}
