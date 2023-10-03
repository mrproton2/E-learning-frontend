import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentvideolecturepanelComponent } from './studentvideolecturepanel.component';

describe('StudentvideolecturepanelComponent', () => {
  let component: StudentvideolecturepanelComponent;
  let fixture: ComponentFixture<StudentvideolecturepanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentvideolecturepanelComponent]
    });
    fixture = TestBed.createComponent(StudentvideolecturepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
