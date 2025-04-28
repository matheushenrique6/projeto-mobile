import { Component, OnInit, Output } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
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
    IonInput,
    CommonModule,
    FormsModule,
    TimeComponent,
  ],
})
export class SettingsPage implements OnInit {
  horaInicio: string = '00:00';
  horaFim: string = '00:00';
  guiche: number = 0;

  constructor(public settingsService: SettingsService) {}

  receberValueGuiche(event: any) {
    if (event.target && event.target.value !== null) {
      this.guiche = +event.target.value; // Converte para número
      this.settingsService.guiche = this.guiche;
      console.log(this.guiche);
    } else {
      console.warn('O valor do guichê é inválido.');
    }
  }

  receberValueHoraInicio(value: string) {
    this.horaInicio = value;
    this.atualizarHorario();
    console.log(this.horaInicio);
  }
  receberValueHoraFim(value: string) {
    this.horaFim = value;
    this.atualizarHorario();
    console.log(this.horaFim);
  }

  atualizarHorario() {
    this.settingsService.horarioFuncionamento = [this.horaInicio, this.horaFim];
    console.log(
      'Horário de funcionamento atualizado:',
      this.settingsService.horarioFuncionamento
    );
  }

  ngOnInit() {}
}
