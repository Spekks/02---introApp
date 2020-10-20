import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public articulos:any = [
    {
      id: 0,
      nombre: "camiseta",
      talla: "L",
      texto: [
        [15.55, "ocultar precio"],
        ["---", "mostrar precio"]
      ],
      check: true
    },
    {
      id: 1,
      nombre: "pantalón",
      talla: "XL",
      texto: [
        [20.95, "ocultar precio"],
        ["---", "mostrar precio"]
      ],
      check: true
    },
    {
      id: 2,
      nombre: "chaqueta",
      talla: "M",
      texto: [
        [45.99, "ocultar precio"],
        ["---", "mostrar precio"]
      ],
      check: true
    },
    {
      id: 3,
      nombre: "Abrigo",
      talla: "L",
      texto: [
        [89.99, "ocultar precio"],
        ["---", "mostrar precio"]
      ],
      check: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.articulos;
  }
  
  mostrarPrecio(id:number) {
    this.articulos[id].check = false;
  }

  ocultarPrecio(id:number) {
    this.articulos[id].check = true;
  }
  
}
