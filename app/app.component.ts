import { Component } from '@angular/core';
import { ForTooltipComponent } from './for-tooltip.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  component = ForTooltipComponent;
}
