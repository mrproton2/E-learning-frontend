import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmaterialfacultypopupComponent } from './uploadmaterialfacultypopup.component';

describe('UploadmaterialfacultypopupComponent', () => {
  let component: UploadmaterialfacultypopupComponent;
  let fixture: ComponentFixture<UploadmaterialfacultypopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadmaterialfacultypopupComponent]
    });
    fixture = TestBed.createComponent(UploadmaterialfacultypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
