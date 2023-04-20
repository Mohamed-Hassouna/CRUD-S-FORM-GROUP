import { TestBed } from '@angular/core/testing';

import { FileActionService } from './file-action.service';

describe('FileActionService', () => {
  let service: FileActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
