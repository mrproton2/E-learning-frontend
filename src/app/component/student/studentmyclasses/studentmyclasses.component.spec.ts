import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmyclassesComponent } from './studentmyclasses.component';

describe('StudentmyclassesComponent', () => {
  let component: StudentmyclassesComponent;
  let fixture: ComponentFixture<StudentmyclassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentmyclassesComponent]
    });
    fixture = TestBed.createComponent(StudentmyclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
