import { Component } from '@angular/core';

@Component({
  selector: 'lib-example-component',
  templateUrl: './exampleLib.component.html',
  standalone: true,
})
export class ExampleLibComponent {
  constructor() {
    console.log('exampleLibComponent constructor');
  }
}
