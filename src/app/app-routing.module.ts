import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [

  {
    path: 'inicio',
    component: InicioComponent,
  },

  {
    path: 'noticias',
    component: NoticiasComponent,
  },

  {
    path: 'sugerencias',
    component: SugerenciasComponent,
  },

  {
    path: 'menu',
    component: MenuComponent,
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
