/* Serviço utilizado como um "contexto" 
para consultarmos em um unico ponto o usuário logado */

import { Injectable } from "@angular/core";
import { User } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class UserContextService {
    _user: User;

    get user() {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
}