import { EmployeeModel, EditEmployeeModel } from './employee.model';


export const employeeMock: EmployeeModel = {
  dni: "0t",
  name: "jose",
  email: "test@test.com",
  department: "administración",
  first_lastname: "ramirez",
  second_lastname: "sanchez",
  birthDate: new Date('01/01/1078'),
}

export const editEmployeeMock: EditEmployeeModel = {
  name: "jose2",
   first_lastname: "ramirez2",
   second_lastname: "sanchez2",
   birthDate: new Date('01/01/1080'),
   department: "contabilidad"
}
