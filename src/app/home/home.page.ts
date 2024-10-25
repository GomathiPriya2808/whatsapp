import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonFab,IonFabButton,IonImg,IonChip,IonFooter,IonItem,IonLabel,IonListHeader,IonList,IonTabs,IonTabButton,IonTabBar,IonAvatar,IonGrid,IonRow,IonCol,IonButtons,IonButton,IonSearchbar,IonIcon,IonText,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import{pinOutline,addOutline,callOutline,peopleCircleOutline,discOutline,cameraOutline, chatboxOutline, ellipsisVerticalOutline, qrCodeOutline,add} from'ionicons/icons'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLink,IonFab,IonFabButton,IonImg,IonChip,IonFooter,IonItem,IonLabel,IonListHeader,IonList,IonTabs,IonTabButton,IonTabBar,IonAvatar,IonGrid,IonRow,IonCol,IonButtons,IonButton,IonSearchbar,IonIcon,IonText,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({pinOutline,addOutline,add,callOutline,peopleCircleOutline,discOutline,chatboxOutline,qrCodeOutline,cameraOutline,ellipsisVerticalOutline})
  }
}
