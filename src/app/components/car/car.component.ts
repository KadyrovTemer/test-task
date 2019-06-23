import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  model:string;

  constructor() { }

  ngOnInit() {
    this.model = 'Audi';
  }

}
