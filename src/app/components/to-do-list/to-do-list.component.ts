import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../Models/to-do';
import { ToDoServices } from '../../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {
todos : ToDo[] = [];
newToDo : ToDo[] = {} as ToDo[];

constructor( private ToDoServices: ToDoServices)
{}

ngOnInit(){
this.getToDos()
}

getToDos(){
  this.ToDoServices.getTodos().subscribe(res => {
    this.todos = res;
  })
}
}



