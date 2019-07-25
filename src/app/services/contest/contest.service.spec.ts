import { TestBed } from '@angular/core/testing';

import { ContestService } from './contest.service';

describe('ContestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContestService = TestBed.get(ContestService);
    expect(service).toBeTruthy();
  });
});
