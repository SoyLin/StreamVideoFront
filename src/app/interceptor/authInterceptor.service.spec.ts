import { TestBed } from '@angular/core/testing';

import { AuthInterceptorService } from './authInterceptor.service';

describe('AuthInterceptorService', () => {
  let service: AuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
