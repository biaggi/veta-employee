import { createAction, props } from '@ngrx/store';
import { EmployeeModel, EditEmployeeModel } from '../../model/employee.model';

export const createEmployee = createAction(
  '[Employees] create',
  props<{ employee: EmployeeModel }>()
);
export const editEmployee = createAction(
  '[Employees] edit',
  props<{ dni: string, employee: EditEmployeeModel }>()
);
export const deleteEmployee = createAction(
  '[Employees] delete',
  props<{ dni: string }>()
);
