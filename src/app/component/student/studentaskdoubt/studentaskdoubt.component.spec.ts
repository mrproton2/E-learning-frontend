import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaskdoubtComponent } from './studentaskdoubt.component';

describe('StudentaskdoubtComponent', () => {
  let component: StudentaskdoubtComponent;
  let fixture: ComponentFixture<StudentaskdoubtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentaskdoubtComponent]
    });
    fixture = TestBed.createComponent(StudentaskdoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
