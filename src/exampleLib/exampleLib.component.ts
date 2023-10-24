import { Component } from '@angular/core';

@Component({
  selector: 'lib-example-component',
  templateUrl: './exampleLib.component.html',
})
export class ExampleLibComponent {
  constructor() {
    console.log('exampleLibComponent constructor');
  }
}
