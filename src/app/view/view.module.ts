import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VisionComponent],
  exports: [
    VisionComponent
  ]
})
export class ViewModule { }
