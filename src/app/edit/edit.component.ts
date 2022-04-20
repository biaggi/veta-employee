import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EmployeeModel } from '../model/employee.model';
import { AppState } from '../store/store';
import { editEmployee } from '../store/actions/employee.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() employee!: EmployeeModel;
  fg!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: new FormControl(this.employee.name, Validators.required),
      first_lastname: new FormControl(this.employee.first_lastname),
      second_lastname: new FormControl(this.employee.second_lastname),
      birthDate: new FormControl(this.employee.birthDate),
      department: new FormControl(this.employee.department),
    });
  }
  submit() {
    if (this.fg.invalid) return;
    this.store.dispatch(editEmployee({dni: this.employee.dni, employee: this.fg.value}))

  }


}
