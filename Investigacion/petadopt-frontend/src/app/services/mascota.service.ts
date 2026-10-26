import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Mascota} from '../domain/mascota.domain';

@Injectable({
    providedIn: 'root'
})

export class MascotaService {
    obtenerMascotasDisponibles():Observable<Mascota[]> {
        return of(this.mascotasDisponibles);
    }

    private readonly mascotasDisponibles: Mascota[] = [
        {
            id: 1,
            nombre: 'Firulais',
            especie: 'Perro',
            disponible: true,
            refugio: { id: 100, nombre: 'Refugio Cartago', ubicacion: 'Cartago' }
        },
        {
            id: 2,
            nombre: 'Michi',
            especie: 'Gato',
            disponible: true,
            refugio: { id: 101, nombre: 'Huellitas de Amor', ubicacion: 'San Jose' }
        },
        {
            id: 3,
            nombre: 'Luna',
            especie: 'Perro',
            disponible: false,
            refugio: { id: 100, nombre: 'Refugio Cartago', ubicacion: 'Cartago' }
        }
    ];
}
