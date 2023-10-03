import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlecturepanelComponent } from './studentlecturepanel.component';

describe('StudentlecturepanelComponent', () => {
  let component: StudentlecturepanelComponent;
  let fixture: ComponentFixture<StudentlecturepanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentlecturepanelComponent]
    });
    fixture = TestBed.createComponent(StudentlecturepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
