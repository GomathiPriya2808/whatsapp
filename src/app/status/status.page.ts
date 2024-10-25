import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabButton,IonFooter,IonTabs,IonTabBar,IonText,IonLabel,IonFabButton,IonFab,IonAvatar,IonItem,IonList,IonIcon,IonButtons,IonButton,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { callOutline,discOutline,add,cameraOutline, ellipsisVerticalOutline, qrCodeOutline, search,  } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonTabButton,RouterLink,IonFooter,IonTabs,IonTabBar,IonFabButton,IonText,IonLabel,IonFabButton,IonFab,IonItem,IonAvatar,IonList,IonIcon,IonButtons,IonButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatusPage  {

  constructor() {
    addIcons({ discOutline,callOutline,add,search, qrCodeOutline, ellipsisVerticalOutline, cameraOutline });
   }



}
