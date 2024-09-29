import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoServices } from '../../services/to-do.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-details.component.html',
  styleUrl: './to-do-details.component.scss'
})
export class ToDoDetailsComponent implements OnInit{
todo!: ToDo ;

constructor
( 
  private route: ActivatedRoute,
  private router: Router,
  private ToDoServices: ToDoServices
) {}

ngOnInit()
{
  this.getTDoById();
}

getTDoById()
{
  const id = this.route.snapshot.paramMap.get('id')?? '';
  if (id) {
    this.ToDoServices.getTDoById(id).subscribe(todo => {
      this.todo = todo;
    });
  } else {
    console.error('No ID provided in route');
  }
}

updateToDo(){
if (this.todo) {
  this.ToDoServices.updateToDo(this.todo).subscribe(() => {
    this.router.navigate(['/todos']);
  })
}
}
}
