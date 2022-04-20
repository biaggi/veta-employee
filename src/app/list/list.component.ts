import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { EmployeeModel } from '../model/employee.model';
import { deleteEmployee } from '../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employees: EmployeeModel[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('employees').subscribe(employees => {

      this.employees = employees.employees
    })
  }

  onDelete(dni: string) {
    this.store.dispatch(deleteEmployee({dni: dni}))
  }
}
