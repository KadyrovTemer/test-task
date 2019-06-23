import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  brand:string;
  model:string;
  photoUrl:string;
  characteristics: {
    diagonal:number;
    color: string;
    cameraMpix:number;
  }

  constructor() { }

  ngOnInit() {
    this.brand = 'Xiaomi';
    this.model = 'Mi 9';
    this.photoUrl = 'https://images.ua.prom.st/1715075203_w128_h128_chehol-nakladka-dlya.jpg';
    this.characteristics = {
      diagonal: 6.0,
      color: 'White',
      cameraMpix: 10
    }
  }

}
