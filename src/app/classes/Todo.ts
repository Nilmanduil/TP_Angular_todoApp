export default class Todo {
  id: number|undefined;
  title: string;
  isDone: boolean;

  constructor({id, title, isDone}) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }
}
