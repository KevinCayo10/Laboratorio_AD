import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'gsv-table-prestamos',
  templateUrl: './table-prestamos.component.html',
  styleUrls: ['./table-prestamos.component.css'],
})
export class TablePrestamosComponent {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  @Input() title: any;

  //OUTPUT
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickEliminar: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickAprobar: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickRechazar: EventEmitter<any> = new EventEmitter<any>();

  columns: string[] = [];

  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  pendiente!: boolean;
  aprobar!: boolean;
  rechazar!: boolean;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((x) => x.field);
    }
  }

  //Validar si los prestamos estan aprobados o rechazados

  //Si esta aprobado 2da condicion

  //Si esta rechazado 3ra condicion

  accionEditar(row: any) {
    this.onClick.emit(row);
  }

  accionAprobar(row: any) {
    this.onClickAprobar.emit(row);
  }

  accionRechazar(row: any) {
    this.onClickRechazar.emit(row);
  }

  accionEliminar(id: any) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este elemento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Código para eliminar el elemento
        this.onClickEliminar.emit(id);
        return;
      }
    });
  }

  mensaje(mensaje: string): void {
    Swal.fire({
      title: mensaje,
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
    });
  }
}
