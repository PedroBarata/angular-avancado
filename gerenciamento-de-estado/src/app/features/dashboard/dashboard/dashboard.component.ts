import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { LastTodosComponent } from '../last-todos/last-todos.component';
import { UserContextService } from '../../../shared/services/user-context.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  @ViewChild(LastTodosComponent, {static: false}) lastTodoChild: LastTodosComponent;

  constructor(private userContext: UserContextService) {
  }

  ngOnInit() {
    this.user = this.userContext.user;
  }

  onCreated(todo: Todo) {
    this.lastTodoChild.handleCreated(todo);
  }
}
