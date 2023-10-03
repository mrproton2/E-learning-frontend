import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmaterialfacultyComponent } from './uploadmaterialfaculty.component';

describe('UploadmaterialfacultyComponent', () => {
  let component: UploadmaterialfacultyComponent;
  let fixture: ComponentFixture<UploadmaterialfacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadmaterialfacultyComponent]
    });
    fixture = TestBed.createComponent(UploadmaterialfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
