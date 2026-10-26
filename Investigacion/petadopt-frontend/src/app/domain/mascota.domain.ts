import { Refugio } from "./refugio.domain";

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  disponible: boolean;
  refugio: Refugio;
}