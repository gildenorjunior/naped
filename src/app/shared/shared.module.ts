import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [HeaderComponent, CardComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
