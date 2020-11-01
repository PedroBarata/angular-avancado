import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(name: string, email: string): Observable<User> {
    return of({ name, email })
      .pipe(delay(2000));
  }
}