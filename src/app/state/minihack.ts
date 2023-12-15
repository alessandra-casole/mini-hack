import { Injectable } from '@angular/core';
import { Companies } from '../models/companies';

@Injectable({
  providedIn: 'root',
})
export class MinihackState {

  companies: Companies[] = [];

  initialize(companies: Companies[]) {
    this.companies = companies;
  }
}
