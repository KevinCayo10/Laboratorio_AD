import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormComponent } from './components/form/form.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FormComponent, PageListComponent],
  imports: [CommonModule, UsuariosRoutingModule, SharedModule],
})
export class UsuariosModule {}
