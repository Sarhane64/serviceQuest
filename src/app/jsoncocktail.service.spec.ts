import { TestBed } from '@angular/core/testing';

import { JsoncocktailService } from './jsoncocktail.service';

describe('JsoncocktailService', () => {
  let service: JsoncocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsoncocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
