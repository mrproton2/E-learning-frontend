import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubstreamComponent } from './addsubstream.component';

describe('AddsubstreamComponent', () => {
  let component: AddsubstreamComponent;
  let fixture: ComponentFixture<AddsubstreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsubstreamComponent]
    });
    fixture = TestBed.createComponent(AddsubstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
