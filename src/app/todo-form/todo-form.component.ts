import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoFormComponent implements OnInit {

  @Output()
  todoEmitter = new EventEmitter();
  @Output()
  resetEmitter = new EventEmitter();

  newTodoTitle = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo(event): void {
    if (this.newTodoTitle) {
      this.todoEmitter.emit(new Todo({title: this.newTodoTitle, isDone: false}));
      this.newTodoTitle = '';
    }
  }
  resetTodos(event): void {
    this.resetEmitter.emit();
  }

}
