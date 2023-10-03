import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubstreampopupComponent } from './addsubstreampopup.component';

describe('AddsubstreampopupComponent', () => {
  let component: AddsubstreampopupComponent;
  let fixture: ComponentFixture<AddsubstreampopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsubstreampopupComponent]
    });
    fixture = TestBed.createComponent(AddsubstreampopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
