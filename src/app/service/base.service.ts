import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url: string = environment.url;
  //endopint es todo lo que continua a mi api, caracteres episodios etc
  endpoint: string = '';
  constructor(private http:HttpClient) { }
  async get(){
    try{
      return await this.http.get(`${this.url}/${this.endpoint}`).toPromise();
    }catch(error){
      return error;
    }
  }
//seteo la url, o sea le doy un nuevo punto de partida, para que me pueda abrir distintas parte de mi url
  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
