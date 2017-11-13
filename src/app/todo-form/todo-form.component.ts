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
  newTodoTitle = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo(event): void {
    console.log('Form : add todo');
    if (this.newTodoTitle) {
      console.log('Todo not empty');
      this.todoEmitter.emit(new Todo({title: this.newTodoTitle, isDone: false}));
    }
  }

}
