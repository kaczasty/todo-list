import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TodoResponse {
  results: Array<{id, title, description, done}>;
}

@Injectable()
export class TodoService {
    private todos: Array<{id, title, description, done}>;
    private todosUrl = 'assets/todos.json';

    constructor (private http: HttpClient) {
        this.http.get<TodoResponse>(this.todosUrl).subscribe(data => {
            this.todos = data.results;
        });
    console.log('service init');
    console.log(this.todos);
    }

    getTodos (): Array<{id, title, description, done}> {
        return this.todos;
    }

    getTodo (id: number): {id, title, description, done} {
        return this.todos.filter(todo => todo.id === id)[0];
    }

    toggleTodo(id: number) {
        const foundIndex = this.todos.findIndex(x => x.id === id);
        this.todos[foundIndex].done = !this.todos[foundIndex].done;
    }

    deleteTodo(id: number) {
        const foundIndex = this.todos.findIndex(x => x.id === id);
        this.todos.splice(foundIndex, 1);
    }

    addTodo(todo: {id, title, description, done}) {
        const titleIndex = this.todos.findIndex(x => x.title === todo.title);
        if (titleIndex) {
            return false;
        }
        todo.id = (Math.max.apply(Math, this.todos.map(function(o){return o.id; })) || 0) + 1;
        this.todos.push(todo);
        return true;
    }

    editTodo(todo: {id, title, description, done}) {
        const titleIndex = this.todos.findIndex(x => x.title === todo.title);
        if (titleIndex) {
            return false;
        }

        const foundIndex = this.todos.findIndex(x => x.id === todo.id);
        this.todos[foundIndex] = todo;
        return true;
    }
}
