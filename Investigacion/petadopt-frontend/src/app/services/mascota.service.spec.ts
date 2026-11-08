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

  //caso 1: que mediante toBeTruthy() se pueda instanciar el servicio correctamente
  it('debe instanciarse', () => {
    //linea que falta

  });

  //caso 2: que mediante toBe() se pueda devolver un arreglo de mascotas quemadas sin conectarse a un servidor
  it('debe devolver mascotas quemadas sin conectarse a un servidor', () => {
    service.obtenerMascotasDisponibles().subscribe((mascotas) => {
   //3 expect con lo esperado
   
    });
  });
});
