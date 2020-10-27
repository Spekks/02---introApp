import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    ComponentsModule
  ]
})
export class NoticiasModule { }
