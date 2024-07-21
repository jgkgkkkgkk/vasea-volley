import {Component} from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule} from "@angular/material/slider";
import {MatButtonToggle, MatButtonToggleModule} from "@angular/material/button-toggle";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
standalone:true,
imports:[MatTabsModule,MatSliderModule,MatButtonToggleModule]
})
export class TabsComponent {

}
