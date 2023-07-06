import { TestBed } from '@angular/core/testing';

import { LoginresterService } from './loginrester.service';

describe('LoginresterService', () => {
  let service: LoginresterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginresterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
