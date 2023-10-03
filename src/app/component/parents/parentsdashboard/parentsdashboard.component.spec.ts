import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsdashboardComponent } from './parentsdashboard.component';

describe('ParentsdashboardComponent', () => {
  let component: ParentsdashboardComponent;
  let fixture: ComponentFixture<ParentsdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentsdashboardComponent]
    });
    fixture = TestBed.createComponent(ParentsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
