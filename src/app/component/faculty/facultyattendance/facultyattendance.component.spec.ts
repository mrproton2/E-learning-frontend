import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyattendanceComponent } from './facultyattendance.component';

describe('FacultyattendanceComponent', () => {
  let component: FacultyattendanceComponent;
  let fixture: ComponentFixture<FacultyattendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyattendanceComponent]
    });
    fixture = TestBed.createComponent(FacultyattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
