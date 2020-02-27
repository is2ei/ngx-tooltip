import { TestBed } from '@angular/core/testing';

import { NgxTooltipService } from './ngx-tooltip.service';

describe('NgxTooltipService', () => {
  let service: NgxTooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
