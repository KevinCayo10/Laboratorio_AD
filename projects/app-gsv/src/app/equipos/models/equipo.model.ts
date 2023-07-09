export class Equipo {
  id_equipo?: string;
  nombre?: string;
  marca?: string;
  caracteristicas?: string;
  estado?: string;

  constructor(
    id_equipo?: string,
    nombre?: string,
    marca?: string,
    caracteristicas?: string,
    estado?: string
  ) {
    this.id_equipo = id_equipo;
    this.nombre = nombre;
    this.marca = marca;
    this.caracteristicas = caracteristicas;
    this.estado = estado;
  }
}
