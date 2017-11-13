import Todo from '../classes/Todo';
import {ApiService} from './api.service';
import {Injectable} from '@angular/core';

@Injectable()
export default class TodoService {
  todoItems: Array<Todo> = [];
  apiService: ApiService;

  constructor(private api: ApiService) {
    this.apiService = api;
    this.fetchList();
  }
  fetchList(): void {
    this.apiService.fetchTodos().subscribe((todos) => {
      todos.forEach((todo) => {
        this.todoItems.push(new Todo({id: todo.id, title: todo.title, isDone: todo.isDone}));
      });
    });
  }

  getTodoList(): Array<Todo> {
    return this.todoItems;
  }
  addTodo(todo: Todo): void {
    this.apiService.addTodo(todo).subscribe(
      () => {
        this.todoItems.push(todo);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
  clearList(): void {
    while (this.todoItems.length > 0) {
      this.todoItems.pop();
    }
  }
}
