import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   employees: reducers.EmployeeState,
}

export const initialState: AppState = {
  employees: reducers.initialStateEmployee,
}



export const appReducers: ActionReducerMap<AppState> = {
   employees: reducers.employeeReducer,
}
