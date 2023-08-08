import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, TableModule],
})
export class TableDataModule {}
