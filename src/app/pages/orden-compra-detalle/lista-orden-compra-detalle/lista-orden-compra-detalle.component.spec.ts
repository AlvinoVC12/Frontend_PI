import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenCompraDetalleComponent } from './lista-orden-compra-detalle.component';

describe('ListaOrdenCompraDetalleComponent', () => {
  let component: ListaOrdenCompraDetalleComponent;
  let fixture: ComponentFixture<ListaOrdenCompraDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdenCompraDetalleComponent]
    });
    fixture = TestBed.createComponent(ListaOrdenCompraDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
