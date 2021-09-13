import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // them vao any
  public employees: any;
  term: any;
  p: any;

  constructor(
    public employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees =data;
      console.log(this.employees);
    })
  }

}
