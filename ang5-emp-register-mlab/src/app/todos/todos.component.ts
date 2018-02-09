import { Component, OnInit } from '@angular/core';

import { TodoService } from "../todos/todo.service";
import { Todo } from "../model/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  text: string;

  constructor(private _todoService: TodoService) {
    this._todoService.getTodos()
          .subscribe(todos => {
            this.todos = todos;
          });
   }

  ngOnInit() {
    
  }

}