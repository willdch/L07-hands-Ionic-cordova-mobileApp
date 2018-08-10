import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableContentsPage } from './table-contents';

@NgModule({
  declarations: [
    TableContentsPage,
  ],
  imports: [
    IonicPageModule.forChild(TableContentsPage),
  ],
})
export class TableContentsPageModule {}
