import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NoticiaComponent } from './noticia/noticia.component';
import { UltimaNoticiaGuardadaComponent } from './ultima-noticia-guardada/ultima-noticia-guardada.component';


@NgModule({
  declarations: [MenuComponent, NoticiaComponent, UltimaNoticiaGuardadaComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    NoticiaComponent,
    UltimaNoticiaGuardadaComponent,
    RouterModule
  ]
})

export class ComponentsModule { }
