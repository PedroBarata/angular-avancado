import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { title } from 'process';
import { Todo } from '../../../shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  @Output() created = new EventEmitter;

  titleControl = new FormControl('');

  list: Todo[];

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {}

  /* Ele é irmão do last-todos, da forma que está, 
  precisamos passar para o pai (dashboard component) 
  e o pai repassar a info de criação para o last-todo */
  save() {
    this.todoService.create({ title: this.titleControl.value })
    .subscribe(todo => {
      this.created.emit(todo);
    });
  }
}
