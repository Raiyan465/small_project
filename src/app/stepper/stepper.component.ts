import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  public bMi: number = 0;

  public form = new FormGroup({
    height: new FormControl(),
    kg: new FormControl()
  })

  constructor() { }
  
  ngOnInit(): void {

  
  }

  bmi(): void {
    this.bMi = this.form.controls.kg.value / this.form.controls.height.value ** 2;
  }

}
