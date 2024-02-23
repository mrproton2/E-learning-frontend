import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancesubjectpopComponent } from './attendancesubjectpop.component';

describe('AttendancesubjectpopComponent', () => {
  let component: AttendancesubjectpopComponent;
  let fixture: ComponentFixture<AttendancesubjectpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendancesubjectpopComponent]
    });
    fixture = TestBed.createComponent(AttendancesubjectpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
