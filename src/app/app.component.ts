import { Component } from '@angular/core';
import styles from 'styles-export/_styles_export.module.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public colorVar: string;
  public fontVar: string;
  public fullMap: Record<string, string>;
  constructor() {
    this.colorVar = styles[`status-color-primary`];
    this.fontVar = styles['font-weight-regular'];
    this.fullMap = styles;
  }
}
