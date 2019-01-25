import { TestBed } from '@angular/core/testing';

import { AttendanceUpdateService } from './attendance-update.service';

describe('AttendanceUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendanceUpdateService = TestBed.get(AttendanceUpdateService);
    expect(service).toBeTruthy();
  });
});
