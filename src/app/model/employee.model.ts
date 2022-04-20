export type DepartmentType =  'administración' | 'tienda' | 'contabilidad'

export interface EmployeeModel {
  dni: string;
  name: string;
  first_lastname?: string;
  second_lastname?: string;
  email: string;
  birthDate?: Date;
  department?: DepartmentType
}


export interface EditEmployeeModel {
  name: string;
  first_lastname?: string;
  second_lastname?: string;
  birthDate?: Date;
  department?: DepartmentType
}
