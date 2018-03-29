import { TestBed, inject } from '@angular/core/testing';

import { WorkflowServiceService } from './workflow-service.service';

describe('WorkflowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowServiceService]
    });
  });

  it('should be created', inject([WorkflowServiceService], (service: WorkflowServiceService) => {
    expect(service).toBeTruthy();
  }));
});
