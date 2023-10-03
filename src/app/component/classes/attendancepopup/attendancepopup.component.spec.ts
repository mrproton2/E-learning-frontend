import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancepopupComponent } from './attendancepopup.component';

describe('AttendancepopupComponent', () => {
  let component: AttendancepopupComponent;
  let fixture: ComponentFixture<AttendancepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendancepopupComponent]
    });
    fixture = TestBed.createComponent(AttendancepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
