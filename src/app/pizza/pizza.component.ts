import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  title: String = "I love pizza!"
  isOn = false;

  constructor() { }

  ngOnInit(): void {
  }
}
