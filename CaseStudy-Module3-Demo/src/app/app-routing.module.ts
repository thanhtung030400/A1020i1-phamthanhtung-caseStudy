import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeeAddComponent } from './components/employees/employee-add/employee-add.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'employee-list', component: EmployeeListComponent},
  {path:'**', component:  PageNotFoundComponent},
  {path: 'employee-add', component: EmployeeAddComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [RouterModule, EmployeeListComponent, PageNotFoundComponent, HomeComponent],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeAddComponent
  ]
})
export class AppRoutingModule { }
