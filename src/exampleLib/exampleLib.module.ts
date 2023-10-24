import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleLibComponent } from './exampleLib.component';

@NgModule({
  declarations: [ExampleLibComponent],
  imports: [CommonModule],
  exports: [ExampleLibComponent],
})
export class ExampleLibModule {}
