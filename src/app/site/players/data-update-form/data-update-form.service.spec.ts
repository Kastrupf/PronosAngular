import { TestBed } from '@angular/core/testing';

import { DataUpdateFormService } from './data-update-form.service';

describe('DataUpdateFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataUpdateFormService = TestBed.get(DataUpdateFormService);
    expect(service).toBeTruthy();
  });
});
