import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdefaultComponent } from './studentdefault.component';

describe('StudentdefaultComponent', () => {
  let component: StudentdefaultComponent;
  let fixture: ComponentFixture<StudentdefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentdefaultComponent]
    });
    fixture = TestBed.createComponent(StudentdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
