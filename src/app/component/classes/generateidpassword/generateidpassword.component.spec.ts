import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateidpasswordComponent } from './generateidpassword.component';

describe('GenerateidpasswordComponent', () => {
  let component: GenerateidpasswordComponent;
  let fixture: ComponentFixture<GenerateidpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateidpasswordComponent]
    });
    fixture = TestBed.createComponent(GenerateidpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
