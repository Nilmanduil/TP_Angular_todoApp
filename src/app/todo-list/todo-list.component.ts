import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  todoItems: Array<Todo> = [];

  constructor() { }

  ngOnInit() {
    const mocks: Array<Todo> = require('../mocks/Todo.json');
    // const mocks = [];
    mocks.forEach((todo) => {
      this.todoItems.push(new Todo({title: todo.title, isDone: todo.isDone}));
    });
  }
  addTodo(todo: Todo): void {
    console.log('List : add todo');
    this.todoItems.push(todo);
  }

}
