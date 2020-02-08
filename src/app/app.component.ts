import { Component } from '@angular/core';

import { MainMenuItem } from '@shared/components/header/header.interfaces';
import { mainMenuItems } from '@shared/components/header/header.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: MainMenuItem[] = mainMenuItems;
}
