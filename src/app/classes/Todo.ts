export default class Todo {
  title: string;
  isDone: boolean;

  constructor({title, isDone}) {
    this.title = title;
    this.isDone = isDone;
  }
}
