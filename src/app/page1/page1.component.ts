import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  public employees = [];
  constructor( private httpservice:FirstServiceService) { }

  ngOnInit(): void {
    this.httpservice.GetEmployees()
    .subscribe(data =>this.employees = data);

  }

}
