import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { KeypadButton } from '../../../shared/interfaces/keypadButton.interface';
import Swal from 'sweetalert2';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'gsv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  registros: any[] = [
    {
      _id: 1,
      producto: 'Laptop HP 15-dy27wm',
      descripcion: 'i7 10Gen, 8ram, 15.6, 256ssd',
      stock: '12',
      precio: '740',
    },
    {
      _id: 2,
      producto: 'Laptop Asus VivaBook M415DA',
      descripcion: 'AMD Ryzen 5, 8ram, 15.6, 256ssd',
      stock: '5',
      precio: '700',
    },
    {
      _id: 3,
      producto: 'iPad Apple A223',
      descripcion: ' 10th Gen, 2022, 256GB',
      stock: '15',
      precio: '350',
    },
    {
      _id: 4,
      producto: 'Tablet Amazon Fire 8',
      descripcion: '10th Gen, 2ram, 8.5, 32GB',
      stock: '15',
      precio: '350',
    },
    {
      _id: 5,
      producto: 'PC Gamer Xeon 12',
      descripcion: 'i7 10Gen, 16ram, 256ssd, RTX3060',
      stock: '15',
      precio: '1100',
    },
    {
      _id: 6,
      producto: 'CPU Azus Row 1 ',
      descripcion: 'i7 12Gen, 32ram,  512ssd, RTX3060',
      stock: '15',
      precio: '1350',
    },
    {
      _id: 7,
      producto: 'Laptop Dell G5',
      descripcion: 'i7 11Gen, 16ram, 15.6, 512ssd',
      stock: '15',
      precio: '990',
    },
    {
      _id: 8,
      producto: 'Laptop Legion 5',
      descripcion: 'i7 12Gen, 8ram, 15.6, 256ssd',
      stock: '15',
      precio: '950',
    },
  ];
  title: string = 'PRODUCTOS';
  // El formulario es para poder abrir o cerrar el componente form
  formulario!: boolean;

  fila!: any;

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'producto', title: 'PRODUCTO' },
    { field: 'descripcion', title: 'DESCRIPCIÓN' },
    { field: 'stock', title: 'STOCK' },
    { field: 'precio', title: 'PRECIO' },
  ];

  keypadButtons: KeypadButton[] = [
    {
      icon: 'fa-solid fa-cloud-arrow-down',
      color: 'btn-success',
      accion: 'download',
    },
    { icon: 'fa-solid fa-plus', color: 'btn-primary', accion: 'NUEVO' },
  ];

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(private productoService: ProductoService) {
    this.cargarProductos('');
  }

  cargarProductos(buscar: string) {
    // this.data = this.registros;
    // this.totalRegistros = this.data.length;
    // this.changePage(0);

    this.productoService.cargarProductos().subscribe((dataWeb) => {
      this.registros = dataWeb;
      if (buscar) {
        console.log(buscar);
        this.registros = this.registros.filter((registro) =>
          registro.producto.toLowerCase().includes(buscar.toLowerCase())
        );
        console.log(this.registros);
      }
      this.totalRegistros = this.registros.length;
      this.changePage(0);
    });
  }
  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.registros.slice(salto, salto + pageSize);
  }
  enviarAccion(accion: string) {
    switch (accion) {
      case 'DOWNLOAD':
        break;
      case 'NUEVO':
        this.formulario = true;
        this.abrirFormulario();
        break;
    }
  }

  accionEditar(row: any) {
    this.formulario = true;
    console.log(row);
    this.abrirFormulario(row);
  }

  accionEliminar(id: any) {
    console.log('Entro a pagelis');
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.cargarProductos('');
    });
  }

  buscarData(searchData: any) {
    console.log(searchData);
    this.cargarProductos(searchData.terminoBusqueda);
  }

  grabarFormulario(formData: any) {
    if (!formData) {
      this.formulario = false;
      return;
    }
    if (formData.id) {
      const producto = { ...formData, _id: formData.id };
      this.productoService
        .actualizarProducto(formData.id, producto)
        .subscribe(() => {
          this.cargarProductos('');
          this.formulario = false;
          this.mostrarMensajeActualizacion();
        });
    } else {
      const producto = { ...formData };
      this.productoService.registrarProducto(producto).subscribe(() => {
        console.log('Dentro regsitrar');
        console.log(producto);
        this.cargarProductos('');
        this.formulario = false;
        this.mostrarMensajeAñadir();
      });
    }
  }

  abrirFormulario(fila: any = null) {
    console.log('entro al abrir formulario producto');
    this.fila = fila;
  }

  cerrarFormulario() {
    this.formulario = false;
  }

  mostrarMensajeActualizacion(): void {
    Swal.fire({
      title: 'Registro actulaizado',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
    });
  }

  mostrarMensajeAñadir(): void {
    Swal.fire({
      title: 'Registro añadido',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
    });
  }
}
