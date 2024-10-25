import { Component } from '@angular/core';
import { IonToolbar,IonFooter,IonTabs,IonTabBar,IonIcon,
  IonTabButton,IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonIcon,IonFooter,IonToolbar,IonTabs,IonTabBar,IonTabButton,IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
