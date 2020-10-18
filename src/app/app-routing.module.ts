import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';

const routes: Routes = [

  {
    path: 'inicio',
    component: InicioComponent,
  },

  {
    path: 'noticias',
    loadChildren: ()=> import('./pages/noticias/noticias.module').then(miModulo=>miModulo.NoticiasModule)
  },

  {
    path: 'articulos',
    component: ArticulosComponent,
  },

  {
    path: 'sugerencias',
    component: SugerenciasComponent,
  },

  {
    path: '**',
    redirectTo: 'inicio',
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
