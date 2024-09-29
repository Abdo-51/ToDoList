import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../Models/to-do';
import { ToDoServices } from '../../services/to-do.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {
todos : ToDo[] = [];
newToDo : ToDo = {} as ToDo;

constructor( private ToDoServices: ToDoServices)
{}

ngOnInit()
{
  this.getToDos()
}

getToDos()
{
    this.ToDoServices.getTodos().subscribe(res => {
    this.todos = res;
  })
}
createToDo()
{
  const addNewToDo = {
    id : this.newToDo.id ,
    title : this.newToDo.title ,
    completed : false
  }
    this.newToDo = addNewToDo

    this.ToDoServices.createToDo(addNewToDo).subscribe(res => {
    this.todos.push(res)
  })
}

deleteToDo(todoId : string) : void
{
  this.ToDoServices.deleteToDo(todoId).subscribe(() => {
    this.todos = this.todos.filter(todo => todo.id !==todoId)
  });
}




}



