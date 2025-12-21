/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroSectionService } from './hero-section.service';

describe('Service: HeroSection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroSectionService]
    });
  });

  it('should ...', inject([HeroSectionService], (service: HeroSectionService) => {
    expect(service).toBeTruthy();
  }));
});
