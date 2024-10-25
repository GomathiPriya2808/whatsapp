import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs,IonTabBar,IonTabButton,IonFooter,IonButton,IonText,IonIcon,IonGrid,IonRow,IonCol,IonCardTitle,IonContent,IonCard,IonCardHeader,IonCardContent,IonCardSubtitle, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calculator, pencil, person } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.page.html',
  styleUrls: ['./communities.page.scss'],
  standalone: true,
  imports: [IonFooter,IonTabs,IonTabBar,IonTabButton,RouterLink,IonButton,IonText,IonIcon,IonGrid,IonRow,IonCol,IonCardTitle,IonContent,IonCard,IonCardHeader,IonCardSubtitle,IonCardContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CommunitiesPage  {

  constructor() {
    addIcons({person,pencil,calculator})
   }


}
