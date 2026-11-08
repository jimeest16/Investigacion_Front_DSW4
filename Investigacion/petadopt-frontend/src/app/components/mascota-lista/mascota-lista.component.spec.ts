import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotaListComponent } from './mascota-lista.component';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../domain/mascota.domain';
import { of } from 'rxjs';
import { vi } from 'vitest';


describe('Pruebas del Componente Lista de Mascotas', () => {

  let componente: MascotaListComponent;
  let entornoPrueba: ComponentFixture<MascotaListComponent>;

  // este servicio es el simulado xq no queremos hacer llamadas HTTP reales en las pruebas unitarias
  let servicioSimulado: {obtenerMascotasDisponibles: any;};


  beforeEach(async () => {
    
    servicioSimulado = {obtenerMascotasDisponibles: vi.fn()
        //la funcion de vi simula el  un observable que retorna un array de mascotas
    };

    //await significa que la configuracion del TestBed es asincrona y debemos esperar a que se complete antes de continuar con las pruebas
    await TestBed.configureTestingModule({
      imports: [MascotaListComponent],
      providers: [
        { provide: MascotaService, useValue: servicioSimulado }
      ]
    }).compileComponents(); // aqui se compila el componente y sus dependencias para que puedan ser probadas

    // Creamos el entorno de prueba para interactuar con el HTML y el componente
    entornoPrueba = TestBed.createComponent(MascotaListComponent);
    componente = entornoPrueba.componentInstance;
  });

  //casos 
  //caso 1: que mediante toBeTruthy() se pueda instanciar el componente correctamente
  it('1. Debe instanciar el componente correctamente', () => {
    


  });
//caso 2: que mediante toBe() se pueda renderizar la mascota en la plantilla HTML
//renderizar significa que el componente se muestra en la interfaz de usuario y se puede ver en el navegador
 it('2. Debe renderizar la mascota en la plantilla HTML', () => {

  //realizar una prueba independiente
  //con una mascota de id 1 para comprobar que es simulada y que no choca con otras pruebas
    const mascotasDePrueba: Mascota[] = [
      

    ];

    
    servicioSimulado.obtenerMascotasDisponibles.mockReturnValue(of(mascotasDePrueba));

    entornoPrueba.detectChanges(); // Ejecuta ngOnInit() y renderiza el HTML

    // toBe? Cuantos datos se pasan en la prueba unitaria
    expect(componente.mascotas.length).toBe(0);


    const htmlVista = entornoPrueba.nativeElement as HTMLElement;
    const etiquetaMascota = htmlVista.querySelector('.mascota-item');

    // Validamos el contenido generado por la nueva plantilla
    expect(etiquetaMascota?.textContent).toContain('Tobby');
    expect(etiquetaMascota?.textContent).toContain('Refugio Cartago');
  });
});