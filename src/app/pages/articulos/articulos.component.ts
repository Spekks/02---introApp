import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public b:boolean;

  public articulos:any = [
    {
      nombre: "camiseta",
      talla: "L",
      texto: [
        [15.55, "ocultar precio"],
        ["---", "mostrar precio"]
      ]
    },
    {
      nombre: "pantalón",
      talla: "XL",
      texto: [
        [20.95, "ocultar precio"],
        ["---", "mostrar precio"]
      ]
    },
    {
      nombre: "chaqueta",
      talla: "M",
      texto: [
        [45.99, "ocultar precio"],
        ["---", "mostrar precio"]
      ]
    },
    {
      nombre: "Abrigo",
      talla: "L",
      texto: [
        [89.99, "ocultar precio"],
        ["---", "mostrar precio"]
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.articulos;
    this.b;
  }

  mostrarPrecio() {
    this.b = false;
  }

  ocultarPrecio() {
    this.b = true;
  }
  
}
