import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestattendanceComponent } from './testattendance.component';

describe('TestattendanceComponent', () => {
  let component: TestattendanceComponent;
  let fixture: ComponentFixture<TestattendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestattendanceComponent]
    });
    fixture = TestBed.createComponent(TestattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
