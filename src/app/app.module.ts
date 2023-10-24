import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ExampleLibModule } from 'exampleLib/exampleLib.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ExampleLibModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
