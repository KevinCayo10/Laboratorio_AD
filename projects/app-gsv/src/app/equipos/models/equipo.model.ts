export class Equipo {
  _id?: string;
  nombre_equipo?: string;
  descripcion_equipo?: string;
  marca?: string;
  modelo?: string;
  caracteristica?: string;
  estado?: string;

  constructor(
    _id?: string,
    nombre_equipo?: string,
    descripcion_equipo?: string,
    marca?: string,
    modelo?: string,
    caracteristica?: string,
    estado?: string
  ) {
    this._id = _id;
    this.nombre_equipo = nombre_equipo;
    this.descripcion_equipo = descripcion_equipo;
    this.marca = marca;
    this.modelo = modelo;
    this.caracteristica = caracteristica;
    this.estado = estado;
  }
}
