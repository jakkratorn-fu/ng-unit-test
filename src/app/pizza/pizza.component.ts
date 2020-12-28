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
  fixture = TestBed.createComponent(PizzaComponent);
  
  // clicked() { this.isOn = !this.isOn; }
  // get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }

  constructor() { }

  ngOnInit(): void {
  }

  it('#clicked() should toggle #isOn',as () => {
    const fixture = TestBed.createComponent(PizzaComponent);
    let comp = fixture.debugElement.componentInstance;
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  // it('#clicked() should set #message to "is on"', () => {
  //   const fixture = TestBed.createComponent(PizzaComponent);
  //   let comp = fixture.debugElement.componentInstance;
  //   expect(comp.message).toMatch(/is off/i, 'off at first');
  //   comp.clicked();
  //   expect(comp.message).toMatch(/is on/i, 'on after clicked');
  // });


}
