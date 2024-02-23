import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstaffpopupComponent } from './addstaffpopup.component';

describe('AddstaffpopupComponent', () => {
  let component: AddstaffpopupComponent;
  let fixture: ComponentFixture<AddstaffpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddstaffpopupComponent]
    });
    fixture = TestBed.createComponent(AddstaffpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
