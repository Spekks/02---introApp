import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items:any = [
    {
      nombre: "Página inicial",
      ruta: "inicio",
    },
    {
      nombre: "Página de noticias",
      ruta: "noticias",
    },
    {
      nombre: "Página de artículos",
      ruta: "articulos",
    },
    {
      nombre: "Página de sugerencias",
      ruta: "sugerencias",
    }
  ];

  constructor() { }

  ngOnInit(): void {
      this.items;
  }

}
