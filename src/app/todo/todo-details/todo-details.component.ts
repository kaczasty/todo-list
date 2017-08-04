import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: {id, title, description, done};

  constructor (private todoService: TodoService,
            private router: Router,
            private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            const todoId: number = +params['id'];
            this.todo = this.todoService.getTodo(todoId);
        });
    }

    goHome () {
        this.router.navigate(['todo']);
    }
}
