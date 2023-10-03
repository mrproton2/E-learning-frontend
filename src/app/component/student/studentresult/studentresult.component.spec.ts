import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentresultComponent } from './studentresult.component';

describe('StudentresultComponent', () => {
  let component: StudentresultComponent;
  let fixture: ComponentFixture<StudentresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentresultComponent]
    });
    fixture = TestBed.createComponent(StudentresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
