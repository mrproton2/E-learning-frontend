import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassprofileComponent } from './classprofile.component';

describe('ClassprofileComponent', () => {
  let component: ClassprofileComponent;
  let fixture: ComponentFixture<ClassprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassprofileComponent]
    });
    fixture = TestBed.createComponent(ClassprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
