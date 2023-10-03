import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmarksComponent } from './uploadmarks.component';

describe('UploadmarksComponent', () => {
  let component: UploadmarksComponent;
  let fixture: ComponentFixture<UploadmarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadmarksComponent]
    });
    fixture = TestBed.createComponent(UploadmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
