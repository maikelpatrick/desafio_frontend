import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateFileRoutingModule } from './update-file-routing.module';
import { UpdateFileComponent } from './update-file/update-file.component';


@NgModule({
  declarations: [
    UpdateFileComponent
  ],
  imports: [
    CommonModule,
    UpdateFileRoutingModule
  ]
})
export class UpdateFileModule { }
