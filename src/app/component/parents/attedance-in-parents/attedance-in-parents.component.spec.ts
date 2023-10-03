import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttedanceInParentsComponent } from './attedance-in-parents.component';

describe('AttedanceInParentsComponent', () => {
  let component: AttedanceInParentsComponent;
  let fixture: ComponentFixture<AttedanceInParentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttedanceInParentsComponent]
    });
    fixture = TestBed.createComponent(AttedanceInParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
