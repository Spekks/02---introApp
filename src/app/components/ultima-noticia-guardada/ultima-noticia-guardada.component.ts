import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultima-noticia-guardada',
  templateUrl: './ultima-noticia-guardada.component.html',
  styleUrls: ['./ultima-noticia-guardada.component.css']
})
export class UltimaNoticiaGuardadaComponent implements OnInit {

  constructor() { }

  @Input() cabecera:string;

  ngOnInit(): void {
  }

}
