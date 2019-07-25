import { TestBed } from '@angular/core/testing';

import { DataFormService } from './data-form.service';

describe('DataFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFormService = TestBed.get(DataFormService);
    expect(service).toBeTruthy();
  });
});
