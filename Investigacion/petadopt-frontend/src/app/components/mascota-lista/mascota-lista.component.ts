import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../domain/mascota.domain';

@Component({
  selector: 'app-mascota-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascota-lista.component.html',
  styleUrls: ['./mascota-lista.component.css']
})
export class MascotaListComponent implements OnInit {
  mascotas: Mascota[] = [];
  errorMessage = '';
  mascotaSolicitadaId: number | null = null;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotaService.obtenerMascotasDisponibles().subscribe({
      next: (data) => {
        this.mascotas = data;
      },
      error: () => {
        this.errorMessage = 'No se pudo conectar con el servidor.';
      }
    });
  }

  solicitarAdopcion(idMascota: number): void {
    this.mascotaSolicitadaId = idMascota;
  }
}