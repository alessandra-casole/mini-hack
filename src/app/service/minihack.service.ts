import { Injectable } from '@angular/core';
import { MinihackState } from '../state/minihack';
import { HttpClient } from '@angular/common/http';
import { Companies } from '../models/companies';

@Injectable({
  providedIn: 'root'
})
export class MinihackService {

  getDatas() {
    return this.http.get<Companies[]>(
      'https://my-json-server.typicode.com/zoelounge/menupizza/companies'
    );
  }

  getId(id: number) {
    return this.http.get<Companies>(
      `https://my-json-server.typicode.com/zoelounge/menupizza/companies/${id}`
    );
  }

  constructor(public minihack: MinihackState, public http: HttpClient) { }
}
