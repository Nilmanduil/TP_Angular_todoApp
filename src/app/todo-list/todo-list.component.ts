import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import Todo from '../classes/Todo';
import TodoService from '../services/TodoService';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  todoItems: Array<Todo> = [];
  service: TodoService;

  constructor(service: TodoService) {
    this.service = service;
  }

  ngOnInit() {
    this.refreshList();
  }
  addTodo(todo: Todo): void {
    this.service.addTodo(todo);
    this.refreshList();
  }
  resetList() {
    this.service.clearList();
    this.refreshList();
  }
  private refreshList(): void {
    this.todoItems = this.service.getTodoList();
  }
}
