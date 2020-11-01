import { Injectable } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';

@Injectable()
export class ListTodosService {

    private _list: Todo[];
    page = 0;

    get list(): Todo[] {
        return this._list;
    }

    set list(value: Todo[]) {
        this._list = value;
    }

    addTodo(todo: Todo) {
        this._list = [todo, ...this._list];
    }
    
}