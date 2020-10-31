import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-child-a-component',
  templateUrl: './child-a-component.component.html',
  styleUrls: ['./child-a-component.component.css']
})

/* Podemos ainda melhorar a generalização desse componente:
    O comportamento que queremos é exibir uma concatenação de 
    duas strings, com isso, ao invés de passarmos o user, podemos
    passar duas strings (text1 e text2) e concatená-las.*/
export class ChildAComponentComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

  get userFullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

}
