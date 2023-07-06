export class Prestamo {
  _id?: string;
  id_equipo_per?: string;
  fecha_prestamo?: string;
  fecha_devolucion?: string;
  id_usuario_presta_per?: string;
  id_usuario_solicita_per?: string;
  observariones?: string;
  estado_equipo?: string;
  aprobado?: string;

  constructor(
    id_equipo_per?: string,
    fecha_prestamo?: string,
    fecha_devolucion?: string,
    id_usuario_presta_per?: string,
    id_usuario_solicita_per?: string,
    observariones?: string,
    estado_equipo?: string,
    aprobado?: string
  ) {
    this.id_equipo_per = id_equipo_per;
    this.fecha_prestamo = fecha_prestamo;
    this.fecha_devolucion = fecha_devolucion;
    this.id_usuario_presta_per = id_usuario_presta_per;
    this.id_usuario_solicita_per = id_usuario_solicita_per;
    this.observariones = observariones;
    this.estado_equipo = estado_equipo;
    this.aprobado = aprobado;
  }
}
