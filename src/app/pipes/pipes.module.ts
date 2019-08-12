import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuilderFilterPipe } from './builder-filter-pipe';


@NgModule({
  declarations: [BuilderFilterPipe],
  imports: [FormsModule, CommonModule],
  exports: [BuilderFilterPipe]
})

export class PipesModule {}
