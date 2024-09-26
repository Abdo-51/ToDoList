import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Title:string = 'To Do List Application'
  imgLink:string = 'https://as2.ftcdn.net/v2/jpg/02/89/04/39/1000_F_289043915_62E4CSfMrMJeW3JFYnaYUcXZLmgV6iK3.jpg'
  
  tasks : string[] = [];
  newTask : string= "";
  isAvilable : boolean = false;
  
  addTask(){
    if(this.newTask.trim() !=="")
      {
        this.tasks.push(this.newTask);
        this.newTask ='';
        this.isAvilable = true ;    
      }
      console.log(this.tasks);
  }
  
  EditTask(index: number, newTaskEdit: string ): string | void {
    if (newTaskEdit) {
      this.tasks[index] = newTaskEdit; 
    } else {
      newTaskEdit = this.tasks[index];
      return this.newTask = newTaskEdit;
    }
    this.newTask = "";
}

DeleteTask(i : number){
  this.tasks.splice(i, 1);
  this.isAvilable = this.tasks.length > 0;
}
}
