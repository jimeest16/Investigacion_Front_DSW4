import { TestBed } from '@angular/core/testing';
import { MascotaService } from './mascota.service';

describe('MascotaService', () => {
  let service: MascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MascotaService]
    });

    service = TestBed.inject(MascotaService);
  });

  it('debe instanciarse', () => {
    expect(service).toBeTruthy();
  });

  it('debe devolver mascotas quemadas sin conectarse a un servidor', () => {
    service.obtenerMascotasDisponibles().subscribe((mascotas) => {
      expect(mascotas.length).toBe(3);
      expect(mascotas[0].nombre).toBe('Firulais');
      expect(mascotas[1].refugio.nombre).toBe('Huellitas de Amor');
    });
  });
});
