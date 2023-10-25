import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ExampleLibComponent } from 'example-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, ExampleLibComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
