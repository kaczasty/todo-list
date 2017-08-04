import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const todoRoutes: Routes = [
    {
    path: 'todo',
    component: TodoListComponent,
    children: [
      {
        path: '',
        component: TodoHomeComponent,
      },
      {
        path: 'add',
        component: TodoFormComponent,
      },
      {
        path: 'edit/:id',
        component: TodoFormComponent,
      },
      {
        path: ':id',
        component: TodoDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
        RouterModule.forChild(todoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TodoRoutingModule { }
