import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState, AppState } from '../store/store';
import { employeeMock } from '../model/employee.mocks';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const initialStateTest: AppState = {
    employees: { employees: [employeeMock] },
  };

  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    store.setState(initialStateTest);

    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should see a employee', () => {
    console.log('a', fixture.debugElement.queryAll(By.css('.employee')));
    expect(fixture.debugElement.queryAll(By.css('.employee')).length).toBe(1);
  });



});
