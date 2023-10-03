import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmarkspopupComponent } from './uploadmarkspopup.component';

describe('UploadmarkspopupComponent', () => {
  let component: UploadmarkspopupComponent;
  let fixture: ComponentFixture<UploadmarkspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadmarkspopupComponent]
    });
    fixture = TestBed.createComponent(UploadmarkspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
