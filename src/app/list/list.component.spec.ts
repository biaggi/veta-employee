import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState, AppState } from '../store/store';
import { employeeMock } from '../model/employee.mocks';
import { By } from '@angular/platform-browser';
import { EditComponent } from '../edit/edit.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const initialStateTest: AppState = {
    employees: { employees: [employeeMock] },
  };

  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent, EditComponent, EmployeeComponent],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    store.setState(initialStateTest);

    spyOn(store, 'dispatch').and.callFake(() => {});
    spyOn(component, 'onDelete');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should see a employee', () => {
    expect(fixture.debugElement.queryAll(By.css('.employee')).length).toBe(1);
  });

  it('should delete a employee', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button.delete');
      console.log(button);
    button.click();
    fixture.detectChanges()
    expect(component.onDelete).toHaveBeenCalledWith('0t');

    store.setState({ employees: { employees: [] } });
    fixture.detectChanges();
    console.log(fixture.debugElement.queryAll(By.css('.employee')));
    expect(fixture.debugElement.queryAll(By.css('.employee')).length).toBe(0);
  });
});
