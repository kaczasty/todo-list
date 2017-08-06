import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<{id, title, description, done}>;
  public name: string;

  constructor (private todoService: TodoService,
            private router: Router) {}

  ngOnInit() {
    this.getTodoList();
    console.log('todo list init');
  }

  getTodoList() {
    this.todos = this.todoService.getTodos();
  }

  selectTodo(todo) {
    this.router.navigate([`todo/${todo.id}`]);
  }

  toggleTodo(todo) {
    this.todoService.toggleTodo(todo.id);
    this.getTodoList();
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo.id);
    this.getTodoList();
  }

  editTodo(todo) {
    this.router.navigate([`todo/edit/${todo.id}`]);
  }
}
