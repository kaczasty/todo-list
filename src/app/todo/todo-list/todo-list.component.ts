import { Component, OnInit, DoCheck, ContentChild, TemplateRef, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck {
  todos: Array<{id, title, description, done}>;
  counts: {countAll, countDone, countNotDone};
  public name: string;
  @ContentChild(TemplateRef) innerTemplate: TemplateRef<any>;

  constructor (private todoService: TodoService,
            private router: Router) {}

  ngOnInit() {
    this.getTodoList();
    this.getTodoCounts();
  }

  ngDoCheck() {
    this.getTodoCounts();
  }

  getTodoCounts() {
    this.counts = this.todoService.getCounts();
  }

  getTodoList() {
    this.todos = this.todoService.getTodos();
  }

  selectTodo(todo) {
    this.router.navigate([`todo/${todo.id}`]);
  }

  toggleTodo(todo) {
    this.todoService.toggleTodo(todo.id);
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo.id);
  }

  editTodo(todo) {
    this.router.navigate([`todo/edit/${todo.id}`]);
  }
}
