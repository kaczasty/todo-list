import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { TodoPipe } from './todo-list/todo.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoHomeComponent,
    TodoFormComponent,
    TodoDetailsComponent,
    TodoPipe],
  exports: [],
  providers: []
})
export class TodoModule { }
