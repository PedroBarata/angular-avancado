import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { LastTodosComponent } from './last-todos/last-todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreateTodoComponent,
    LastTodosComponent,
    DashboardComponent,
    ListTodosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list',
        component: ListTodosComponent,
      },
    ]),
  ],
})
export class DashboardModule {}
