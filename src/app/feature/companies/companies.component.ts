import { Component, OnInit } from '@angular/core';
import { Companies } from 'src/app/models/companies';
import { MinihackService } from 'src/app/service/minihack.service';
import { MinihackState } from 'src/app/state/minihack';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;

  constructor(
    public minihackService: MinihackService,
    public minihackState: MinihackState
  ) {}
  ngOnInit(): void {
    this.minihackService.getDatas();
  }
}
