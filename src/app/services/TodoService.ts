import Todo from '../classes/Todo';

export default class TodoService {
  todoItems: Array<Todo> = [];

  getTodoList(): Array<Todo> {
    return this.todoItems;
  }
  addTodo(todo: Todo): void {
    this.todoItems.push(todo);
  }
  clearList(): void {
    while (this.todoItems.length > 0) {
      this.todoItems.pop();
    }
  }
}
