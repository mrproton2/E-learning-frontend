import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdashboardComponent } from './classdashboard.component';

describe('ClassdashboardComponent', () => {
  let component: ClassdashboardComponent;
  let fixture: ComponentFixture<ClassdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassdashboardComponent]
    });
    fixture = TestBed.createComponent(ClassdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
