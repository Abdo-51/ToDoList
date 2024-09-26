import { Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HomeComponent } from './components/home/home.component';
import { ToDoDetailsComponent } from './components/to-do-details/to-do-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo: '/todos' , pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'todos', component: ToDoListComponent},
    {path:'todos/:id', component: ToDoDetailsComponent},
    {path:'contactus', component: ContactUsComponent},
    {path:'about', component: AboutComponent},
    {path:'**' , component:NotFoundComponent }

];
