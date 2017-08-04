import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';

import {TodoListService} from './todo-list.service';

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
  providers: [TodoListService]
})
export class TodoListModule { }
