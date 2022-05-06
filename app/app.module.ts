import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent, TooltipContainerDirective } from './tooltip.component';
import { ForTooltipComponent } from './for-tooltip.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  TooltipDirective, TooltipComponent, ForTooltipComponent, TooltipContainerDirective],
  entryComponents: [ TooltipComponent, ForTooltipComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  
}
