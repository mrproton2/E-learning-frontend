import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdefaultComponent } from './classdefault.component';

describe('ClassdefaultComponent', () => {
  let component: ClassdefaultComponent;
  let fixture: ComponentFixture<ClassdefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassdefaultComponent]
    });
    fixture = TestBed.createComponent(ClassdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
