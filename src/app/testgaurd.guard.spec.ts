import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { testgaurdGuard } from './testgaurd.guard';

describe('testgaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => testgaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
