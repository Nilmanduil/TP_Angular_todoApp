import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  ngOnInit() {
  }

}
