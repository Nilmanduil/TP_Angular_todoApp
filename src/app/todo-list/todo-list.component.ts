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

  ngOnInit() {  }
  addTodo(todo: Todo): void {
    console.log('List : add todo');
    this.todoItems.push(todo);
  }

}
