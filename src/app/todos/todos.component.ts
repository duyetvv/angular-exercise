import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  oriTodos:any = [
    { name: 'duyet', status: true },
    { name: 'duyet1', status: false }
  ];

  todos:any = [];
  name:string = '';
  filters:string[] = ['false', 'true'];

  constructor() { }

  ngOnInit() {
    this.filterTodo();
  }

  addTodo() {
    if (!this.name) {
      return;
    }

    this.oriTodos.push({
      name: this.name,
      status: true
    });

    this.filterTodo();
    this.name = '';
  }

  toggleStatus(index) {
    this.todos[index].status = !this.todos[index].status;
    this.filterTodo();
  }

  deleteTodo(index) {
    this.oriTodos.splice(index, 1);
    this.todos = [].concat(this.oriTodos);
  }

  handleFilter(evt) {
    const target = evt.target;
    const name = target.name;

    if (evt.target.checked) {
      this.filters = Array.from(new Set(this.filters.concat(name)));
      this.filterTodo();
      return;
    }
    this.filters = this.filters.filter(ele => ele !== name)
    this.filterTodo();
  }

  filterTodo() {
    this.todos = !this.filters.length ? []
    : [].concat(
      this.oriTodos.filter(todo => this.filters.indexOf(todo.status.toString()) !== -1)
    );
  }
}
