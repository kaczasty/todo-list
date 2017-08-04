import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
    todos: Array<{id, title, description, done}> = [
        { id: 1, title: 'Todo 1', description: 'Todo 1 description', done: false },
        { id: 2, title: 'Todo 2', description: 'Todo 2 description', done: false },
        { id: 3, title: 'Todo 3', description: 'Todo 3 description', done: false },
        { id: 4, title: 'Todo 4', description: 'Todo 4 description', done: false }
    ];

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

    addTodo() {
    }
}
