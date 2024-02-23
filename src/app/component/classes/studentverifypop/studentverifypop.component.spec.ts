import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentverifypopComponent } from './studentverifypop.component';

describe('StudentverifypopComponent', () => {
  let component: StudentverifypopComponent;
  let fixture: ComponentFixture<StudentverifypopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentverifypopComponent]
    });
    fixture = TestBed.createComponent(StudentverifypopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
