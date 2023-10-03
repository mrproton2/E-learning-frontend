import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmaterialpopupComponent } from './uploadmaterialpopup.component';

describe('UploadmaterialpopupComponent', () => {
  let component: UploadmaterialpopupComponent;
  let fixture: ComponentFixture<UploadmaterialpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadmaterialpopupComponent]
    });
    fixture = TestBed.createComponent(UploadmaterialpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
