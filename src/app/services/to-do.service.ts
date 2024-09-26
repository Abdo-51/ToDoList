import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoServices {
  private apiUrl = 'http://localhost:3000/todos'
  
  constructor(private httpClient: HttpClient) { }

  // get all todos
  getTodos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.apiUrl);
  }

  createToDo(todo : ToDo) : Observable<ToDo>{
    return this.httpClient.post<ToDo>(this.apiUrl , JSON.stringify(todo));
  }
  
  getTDoById(id:string) : Observable<ToDo>{
    return this.httpClient.get<ToDo>(`${this.apiUrl}/${id}`)
  }

  updateToDo(todo: ToDo) : Observable<ToDo>{
  return this.httpClient.put<ToDo>(`${this.apiUrl}/${todo.id}`, todo)  
  }

  deleteToDo(todoId : string) : Observable<any>{
    return this.httpClient.delete<ToDo>(`${this.apiUrl}/${todoId}`)
  }
}
