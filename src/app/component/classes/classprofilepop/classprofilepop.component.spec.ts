import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassprofilepopComponent } from './classprofilepop.component';

describe('ClassprofilepopComponent', () => {
  let component: ClassprofilepopComponent;
  let fixture: ComponentFixture<ClassprofilepopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassprofilepopComponent]
    });
    fixture = TestBed.createComponent(ClassprofilepopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
