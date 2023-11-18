import { TestBed } from '@angular/core/testing';

import { OrdenCompraDetalleService } from './orden-compra-detalle.service';

describe('OrdenCompraDetalleService', () => {
  let service: OrdenCompraDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenCompraDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
