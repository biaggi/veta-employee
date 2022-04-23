import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { EmployeeModel } from '../model/employee.model';
import { deleteEmployee } from '../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  employees: EmployeeModel[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subs.push(
      this.store.select('employees').subscribe((employees) => {
        this.employees = employees.employees;
      })
    );
  }

  onDelete(dni: string) {
    console.log('a', dni)
    this.store.dispatch(deleteEmployee({ dni: dni }));
  }

  subs: Subscription[] = [];
  ngOnDestroy(): void {
    this.subs.map((item) => item.unsubscribe());
  }
}
