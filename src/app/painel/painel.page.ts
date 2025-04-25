import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { AtendimentoService } from '../services/atendimento.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonListHeader,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class PainelPage implements OnInit {
   public painelChamadas: string[] = [];
  
  constructor(public atendimentoService: AtendimentoService) {}

  ngOnInit() {
    this.painelChamadas = this.atendimentoService.painelChamadas;
  }
}
