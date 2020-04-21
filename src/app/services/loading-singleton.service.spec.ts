import { TestBed } from '@angular/core/testing';

import { LoadingSingletonService } from './loading-singleton.service';

describe('LoadingSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingSingletonService = TestBed.get(LoadingSingletonService);
    expect(service).toBeTruthy();
  });
});
