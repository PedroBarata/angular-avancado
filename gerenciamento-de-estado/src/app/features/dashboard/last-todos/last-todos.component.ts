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

  constructor(private listTodosService: ListTodosService) {}

  /* Não está ouvindo as alterações que vem do serviço, com isso, nao atualizamos o DOM aqui */
  ngOnInit() {
    /*neste caso, esse trecho apenas EMITE o comando para obter a pagina 0 da lista
    além disso, precisamos ainda do subscriber para pegar essa emissao*/
    this.listTodosService.getList(0);

    this.listTodosService.list$.subscribe(
      (list) => (this.list = list.slice(0, 10))
    );
  }

  markAsDone(id: number) {
    this.listTodosService.markAsDone(id);
  }
}
