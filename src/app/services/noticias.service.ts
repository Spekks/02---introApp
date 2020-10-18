import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaNoticias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http:HttpClient) { }

  getNoticias() {
    return new Promise<RespuestaNoticias>(resolve=>{
      this._http.get<RespuestaNoticias>(`${environment.apiUrl}?q=bitcoin&from=2020-09-18&sortBy=publishedAt&apiKey=${environment.apiKey}`).subscribe(resp=>{
        resolve(resp);
      })
    })

  }
}
