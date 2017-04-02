/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GamestuffService } from './gamestuff.service';

describe('GamestuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamestuffService]
    });
  });

  it('should ...', inject([GamestuffService], (service: GamestuffService) => {
    expect(service).toBeTruthy();
  }));
});
