import { Injectable } from '@angular/core';
import { MinihackState } from '../state/minihack';
import { HttpClient } from '@angular/common/http';
import { Companies } from '../models/companies';

@Injectable({
  providedIn: 'root',
})
export class MinihackService {
  getDatas() {
    return this.http
      .get<Companies[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/companies'
      )
      .subscribe((result) => {
        // Aggiungi la proprietà preferred e recupera dal localStorage
        result.forEach((company) => {
          company.preferred =
            localStorage.getItem(`${company.id}preferred`) === 'true';
        });

        this.minihackState.initialize(result);
      });
  }

  // Aggiorna lo stato preferred e salva nel localStorage
  updatePreferredState(company: Companies) {
    company.preferred = !company.preferred;
    localStorage.setItem(
      `${company.id}preferred`,
      company.preferred.toString()
    );
  }

  // getId(id: number) {
  //   return this.http.get<Companies>(
  //     `https://my-json-server.typicode.com/zoelounge/menupizza/companies/${id}`
  //   );
  // }

  constructor(public minihackState: MinihackState, public http: HttpClient) {}
}
