import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {
  list: Todo[];

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todosService.getList(0).subscribe(list => this.list = list);
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id).subscribe(todo => {
      this.list = this.list.map((item) => (item.id === todo.id ? todo : item));
    });
  }

  handleCreated(todo: Todo) {
    this.list = [todo, ...this.list];
  }
}
