import { Component } from '@angular/core';
import styles from '../styles_export.module.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public colorVar = styles.color;
  constructor() {}
  ngOnInit() {
    console.log(`Color var: ${this.colorVar}`);
  }
}
