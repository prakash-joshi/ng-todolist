import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        srno: 1,
        title: "This is title 1",
        desc: "This is description 1",
        isactive: true
      },
      {
        srno: 2,
        title: "This is title 2",
        desc: "This is description ",
        isactive: true
      }
    ]
  }

}
