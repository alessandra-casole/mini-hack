import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Companies } from 'src/app/models/companies';
import { MinihackService } from 'src/app/service/minihack.service';
import { MinihackState } from 'src/app/state/minihack';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  company?: Companies;
  id?: number;
  constructor(
    public minihackState: MinihackState,
    public minihackService: MinihackService,
    public route: ActivatedRoute,
    public http: HttpClient
  ) {
    const id = +route.snapshot.params['id'];

    this.http
      .get<Companies>(
        `https://my-json-server.typicode.com/zoelounge/menupizza/companies/${id}`
      )
      .subscribe((result) => {
        this.company = result;
      });
  }

  ngOnInit(): void {
    this.minihackService.getDatas();
  }
}
