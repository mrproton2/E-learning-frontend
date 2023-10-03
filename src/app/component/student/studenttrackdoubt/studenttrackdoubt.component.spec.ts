import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttrackdoubtComponent } from './studenttrackdoubt.component';

describe('StudenttrackdoubtComponent', () => {
  let component: StudenttrackdoubtComponent;
  let fixture: ComponentFixture<StudenttrackdoubtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenttrackdoubtComponent]
    });
    fixture = TestBed.createComponent(StudenttrackdoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
