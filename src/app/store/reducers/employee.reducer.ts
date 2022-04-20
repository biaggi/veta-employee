import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { EmployeeModel } from '../../model/employee.model';

export interface EmployeeState {
  employees: EmployeeModel[];
}

export const initialStateEmployee: EmployeeState = {
  employees: [],
};

export const employeeReducer = createReducer(
  initialStateEmployee,

  on(actions.createEmployee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
  })),
  on(actions.editEmployee, (state, { employee, dni }) => {
    return {
      ...state,
      employees: state.employees.map((currentEmployee) => {
        if (currentEmployee.dni != dni) return currentEmployee;
        return { ...currentEmployee, ...employee };
      }),
    };
  }),
  on(actions.deleteEmployee, (state, { dni }) => {
    return {
      ...state,
      employees: state.employees.filter((employee) => employee.dni != dni),
    };
  })
);
