import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter',
  pure: false
})
export class TodoPipe implements PipeTransform {

  transform(todos: Array<{id, title, description, done}>, title: string) {
    return todos.filter(todo => {
            if (title) {
                return todo.title.indexOf(title) !== -1;
            }

            return true;
        });
  }
}
