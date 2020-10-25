import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  constructor() {}

  getUser() {
    return of(this.user);
  }
}
