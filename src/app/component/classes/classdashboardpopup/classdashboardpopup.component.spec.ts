import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdashboardpopupComponent } from './classdashboardpopup.component';

describe('ClassdashboardpopupComponent', () => {
  let component: ClassdashboardpopupComponent;
  let fixture: ComponentFixture<ClassdashboardpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassdashboardpopupComponent]
    });
    fixture = TestBed.createComponent(ClassdashboardpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
