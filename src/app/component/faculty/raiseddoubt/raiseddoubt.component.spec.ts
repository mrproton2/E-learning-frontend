import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseddoubtComponent } from './raiseddoubt.component';

describe('RaiseddoubtComponent', () => {
  let component: RaiseddoubtComponent;
  let fixture: ComponentFixture<RaiseddoubtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaiseddoubtComponent]
    });
    fixture = TestBed.createComponent(RaiseddoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
