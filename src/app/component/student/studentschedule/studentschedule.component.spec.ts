import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentscheduleComponent } from './studentschedule.component';

describe('StudentscheduleComponent', () => {
  let component: StudentscheduleComponent;
  let fixture: ComponentFixture<StudentscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentscheduleComponent]
    });
    fixture = TestBed.createComponent(StudentscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
