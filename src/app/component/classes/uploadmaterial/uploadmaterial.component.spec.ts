import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmaterialComponent } from './uploadmaterial.component';

describe('UploadmaterialComponent', () => {
  let component: UploadmaterialComponent;
  let fixture: ComponentFixture<UploadmaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadmaterialComponent]
    });
    fixture = TestBed.createComponent(UploadmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
