import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<{id, title, description, done}>;
  public name: string;

  constructor (private todoListService: TodoListService,
            private router: Router) {}

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todos = this.todoListService.getTodos();
  }

  selectTodo(todo) {
    this.router.navigate([`todo/${todo.id}`]);
  }

  toggleTodo(todo) {
    this.todoListService.toggleTodo(todo.id);
    this.getTodoList();
  }

  deleteTodo(todo) {
    this.todoListService.deleteTodo(todo.id);
    this.getTodoList();
  }

  addTodo() {
    this.todoListService.addTodo();
    this.getTodoList();
  }
}
