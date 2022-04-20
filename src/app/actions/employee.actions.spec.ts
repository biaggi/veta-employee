import * as actions from './employee.actions';
import { employeeMock, editEmployeeMock } from '../model/employee.mocks';

describe('employee actions', () => {
  it('can create create user action', () => {
    const action = actions.createEmployee({ employee: employeeMock });
    expect(action).toEqual({
      type: '[Employees] create',
      employee: employeeMock,
    });
  });
  it('can create  edit action', () => {
    const action = actions.editEmployee({ employee: editEmployeeMock });
    expect(action).toEqual({
      type: '[Employees] edit',
      employee: editEmployeeMock,
    });
  });
  it('can create  delete action', () => {
    const mockdni = "0t"
    const action = actions.deleteEmployee({ dni: mockdni });
    expect(action).toEqual({
      type: '[Employees] delete',
      dni: mockdni,
    });
  });
});
