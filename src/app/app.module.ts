import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeService } from './services/employee.service';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmployeeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
