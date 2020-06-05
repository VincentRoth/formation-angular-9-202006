import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Animal } from './animal';

describe('AnimalService', () => {
  let service: AnimalService;
  let httpTestCtlr: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AnimalService);
    httpTestCtlr = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should query one animal', () => {
    service.get(1).subscribe((animal) => {
      expect(animal.name).toEqual('Teto');
    });

    const request = httpTestCtlr.expectOne('/api/animals/1');
    expect(request.request.method).toEqual('GET');

    request.flush({ id: 1, name: 'Teto' } as Animal);

    httpTestCtlr.verify();
  });
});
