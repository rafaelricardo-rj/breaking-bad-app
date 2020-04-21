import { TestBed } from '@angular/core/testing';

import { CharactersImagesSingletonService } from './characters-images-singleton.service';

describe('CharactersImagesSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactersImagesSingletonService = TestBed.get(CharactersImagesSingletonService);
    expect(service).toBeTruthy();
  });
});
