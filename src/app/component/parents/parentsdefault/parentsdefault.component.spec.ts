import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsdefaultComponent } from './parentsdefault.component';

describe('ParentsdefaultComponent', () => {
  let component: ParentsdefaultComponent;
  let fixture: ComponentFixture<ParentsdefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentsdefaultComponent]
    });
    fixture = TestBed.createComponent(ParentsdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
