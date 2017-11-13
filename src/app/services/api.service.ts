import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Todo from '../classes/Todo';
import {Observable} from 'rxjs/Observable';

const API_BASE_URL = 'http://localhost:3000/';
const API_TODO = 'todos/';

@Injectable()
export class ApiService {
  http: HttpClient;

  constructor(private clientModule: HttpClient) {
    this.http = clientModule;
  }

  fetchTodos(): Observable<Object> {
    return this.http.get(`${API_BASE_URL}${API_TODO}`);
  }

}
