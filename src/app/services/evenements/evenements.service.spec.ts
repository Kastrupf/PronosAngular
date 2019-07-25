import { TestBed } from '@angular/core/testing';

import { EvenementsService } from './evenements.service';

describe('EvenementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenementsService = TestBed.get(EvenementsService);
    expect(service).toBeTruthy();
  });
});
