import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor() { }

  @Input() noticia:Article;
  @Output() cabeceraEvento = new EventEmitter;

  ngOnInit(): void {
  }

  guardarHeader(titulo:string){
    this.cabeceraEvento.emit(titulo);
  }
}
