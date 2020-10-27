import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  public noticias:Article[] = [];
  public head:string;

  constructor(private _noticiasService:NoticiasService) { }

  async ngOnInit() {
    const not = await this._noticiasService.getNoticias();
    this.noticias = not.articles;
  }

  guardaTitular(titular:string) {
    this.head = titular;
  }
}
