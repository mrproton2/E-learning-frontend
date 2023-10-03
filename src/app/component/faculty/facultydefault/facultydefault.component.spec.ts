import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydefaultComponent } from './facultydefault.component';

describe('FacultydefaultComponent', () => {
  let component: FacultydefaultComponent;
  let fixture: ComponentFixture<FacultydefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultydefaultComponent]
    });
    fixture = TestBed.createComponent(FacultydefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
