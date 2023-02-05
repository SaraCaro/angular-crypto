import { TestBed } from '@angular/core/testing';

import { AccesoDatosApiService } from './acceso-datos-api.service';

describe('AccesoDatosApiService', () => {
  let service: AccesoDatosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoDatosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
