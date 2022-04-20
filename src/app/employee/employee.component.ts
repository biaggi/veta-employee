import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { createEmployee } from '../store/actions/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  fg!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fg = this.fb.group({
      dni: new FormControl('1', Validators.required),
      name: new FormControl('2', Validators.required),
      first_lastname: new FormControl('3', Validators.required),
      second_lastname: new FormControl('3', Validators.required),
      email: new FormControl('4', Validators.required),
      birthDate: new FormControl('01/01/2000', Validators.required),
      department: new FormControl('administración', Validators.required),
    });
  }
  submit() {
    console.log(this.fg.valid, this.fg.value)
    if (this.fg.invalid) return;
    this.store.dispatch(createEmployee({employee: this.fg.value}))

  }

}

