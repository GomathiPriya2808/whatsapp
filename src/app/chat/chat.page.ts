import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs,IonTabBar,IonFooter,IonTabButton,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { add, addOutline, callOutline, cameraOutline, chatboxOutline, discOutline, ellipsisVerticalOutline, peopleCircleOutline, pinOutline, qrCodeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonTabs,IonTabBar,RouterLink,IonFooter,IonTabButton,IonIcon,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatPage implements OnInit {

  constructor() { }

  ngOnInit() {
        addIcons({pinOutline,addOutline,add,callOutline,peopleCircleOutline,discOutline,chatboxOutline,qrCodeOutline,cameraOutline,ellipsisVerticalOutline})

  }

}
