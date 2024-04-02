import { TestBed } from '@angular/core/testing';

import { CoktailsService } from './coktails.service';

describe('CoktailsService', () => {
  let service: CoktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
