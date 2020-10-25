import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component3',
  templateUrl: './child-component3.component.html',
  styleUrls: ['./child-component3.component.css'],
})
export class ChildComponent3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get values(): string[] {
    return Array.from('0'.repeat(1000)).map((_, index) => `Value ${index}`);
  }
}
