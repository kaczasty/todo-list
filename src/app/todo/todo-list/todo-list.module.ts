import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';

import {TodoService} from '../todo.service';

import { TodoPipe } from './todo.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoPipe],
  exports: [TodoListComponent],
  providers: [TodoService]
})
export class TodoListModule { }
