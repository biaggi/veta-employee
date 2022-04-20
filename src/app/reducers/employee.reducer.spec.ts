import * as reducer from './employee.reducer';
import * as actions from '../actions/employee.actions';
import { initialStateEmployee } from './employee.reducer';
import { employeeMock, editEmployeeMock } from '../model/employee.mocks';


describe('Employee Reducer', () => {
  it('unknown action', () => {
    const state = reducer.employeeReducer(reducer.initialStateEmployee, {
      type: 'unknown',
    });
    expect(state).toBe(reducer.initialStateEmployee);
  });

  it('crear empleado', () => {
    const state = reducer.employeeReducer(
      reducer.initialStateEmployee,
      actions.createEmployee({employee: employeeMock})
    );
    expect(state).not.toBe(initialStateEmployee);
    expect(state.employees.length).toEqual(1);
    expect(state.employees[0]).toEqual(employeeMock);

  });

  it('edit empleado', () => {
    const state = reducer.employeeReducer(
      {employees: [employeeMock]},
      actions.editEmployee({dni: "0t", employee: editEmployeeMock})
    );
    expect(state).not.toBe(initialStateEmployee);
    expect(state.employees.length).toEqual(1);
    expect(state.employees[0].first_lastname).toEqual(editEmployeeMock.first_lastname);
  });

  it('delete empleado', () => {
    const state = reducer.employeeReducer(
      {employees: [employeeMock]},
      actions.deleteEmployee({dni: "0t"})
    );
    expect(state).not.toBe(initialStateEmployee);
    expect(state.employees.length).toEqual(0);
  });
});
