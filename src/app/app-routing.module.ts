import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';





const routes: Routes = [ { path: "", redirectTo: "home", pathMatch: 'full' },
      { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeeListComponent }]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
     
  exports: [RouterModule]
})
export class AppRoutingModule { }
