import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  model: {id, title, description, done};
  editMode: boolean;

  constructor(private todoService: TodoService,
            private router: Router,
            private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
            const todoId: number = +params['id'];
            if (todoId) {
              this.model = this.todoService.getTodo(todoId);
              this.editMode = true;
            } else {
              this.editMode = false;
              this.model = {} as {id, title, description, done};
            }
        });
  }

  onSubmit() {
    if (this.editMode) {
      this.todoService.editTodo(this.model);
    } else {
      this.todoService.addTodo(this.model);
    }

    this.goHome();
  }

  goHome () {
        this.router.navigate(['todo']);
  }
}
