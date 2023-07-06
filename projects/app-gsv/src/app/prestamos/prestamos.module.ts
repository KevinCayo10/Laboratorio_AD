import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { FormComponent } from './components/form/form.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FormComponent, PageListComponent],
  imports: [CommonModule, PrestamosRoutingModule, SharedModule],
})
export class PrestamosModule {}
