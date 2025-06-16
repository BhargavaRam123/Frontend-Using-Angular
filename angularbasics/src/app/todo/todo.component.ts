import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [FormsModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: any = [];
  newTodo: string = '';
  addTodo() {
    console.log('you clicked the button');
    console.log('todo value is:', this.newTodo);
    const todo = {
      id: this.todos.length + 1,
      text: this.newTodo,
      completed: false,
    };
    this.todos.push(todo);
    console.log('todos array', this.todos);
  }
  deleteTodo(id: number) {
    // console.log('id value:', id);
    this.todos = this.todos.filter((o: any) => o.id !== id);
  }
  complete(id: number) {
    console.log('complet id value', id);
    this.todos = this.todos.map((e: any) => {
      if (e.id === id) {
        e.completed = true;
      }
      return e;
    });
    this.todos[id - 1].completed = true;
  }
}
