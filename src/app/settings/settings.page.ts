import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonCardContent,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { TimeComponent } from '../components/time/time.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonLabel,
    IonCardContent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    TimeComponent,
  ],
})
export class SettingsPage implements OnInit {
  horaInicio: string = '00:00';
  horaFim: string = '00:00';

  constructor() {}

  receberValueHoraInicio(value: string) {
    this.horaInicio = value;
    console.log(this.horaInicio);
  }
  receberValueHoraFim(value: string) {
    this.horaFim = value;
    console.log(this.horaFim);
  }

  ngOnInit() {}
}
