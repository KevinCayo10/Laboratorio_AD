export class Usuario {
  _id?: string;
  cedula?: string;
  nombre?: string;
  apellido?: string;
  correo?: string;
  contraseña?: string;
  rol?: string;

  constructor(
    _id?: string,
    cedula?: string,
    nombre?: string,
    apellido?: string,
    correo?: string,
    contraseña?: string,
    rol?: string
  ) {
    this._id = _id;
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contraseña = contraseña;
    this.rol = rol;
  }
}
