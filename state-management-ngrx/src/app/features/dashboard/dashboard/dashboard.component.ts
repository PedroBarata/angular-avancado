import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { LastTodosComponent } from '../last-todos/last-todos.component';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  @ViewChild(LastTodosComponent, {static: false}) lastTodoChild: LastTodosComponent;

  constructor() {
  }

  ngOnInit() {
  }

  onCreated(todo: Todo) {
    this.lastTodoChild.handleCreated(todo);
  }
}
