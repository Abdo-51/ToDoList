import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
Title:string = 'To Do List Application'
imgLink:string = 'https://as2.ftcdn.net/v2/jpg/02/89/04/39/1000_F_289043915_62E4CSfMrMJeW3JFYnaYUcXZLmgV6iK3.jpg'
}
