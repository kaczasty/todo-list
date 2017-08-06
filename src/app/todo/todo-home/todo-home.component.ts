import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  constructor(private router: Router,
            private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  addTodo() {
    this.router.navigate(['todo/add']);
  }

}
