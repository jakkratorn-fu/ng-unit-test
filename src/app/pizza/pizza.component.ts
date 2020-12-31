import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  title: String = "I love pizza!"
  isOn = false;
  message = 'is off'

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.isOn = !this.isOn
    this.message = 'is on'
  }
}
