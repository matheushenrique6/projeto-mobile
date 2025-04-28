import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Esse importa os <ion-*>
import { AtendimentoService } from '../services/atendimento.service'; // ajuste o caminho se necessário
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  private audio = new Audio('/assets/sinal.mp3');
  public disableChamar = false;
  public disableFinalizar = true;
  public foraDeTurno = true;
  public timeNow: string = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  constructor(public atendimentoService: AtendimentoService, public settingsService: SettingsService) {}

  get senhaAtual(): string | null {
    return this.atendimentoService['senhaAnterior'];
  }

  chamarSenha() {
    this.checkHorarioFuncionamento();
    if (this.foraDeTurno) {
      return;
    }

    this.atendimentoService.chamarProximaSenha();
    this.audio.currentTime = 0;

    if (this.senhaAtual !== null) {
      if (this.disableFinalizar) {
        this.disableFinalizar = false;
      }
      this.disableChamar = true;
    }
    this.audio.play(); 
    
  }

  finalizarSenha() {
    this.atendimentoService.finalizarAtendimento();
    if (this.disableChamar) {
      this.disableChamar = false;
    }
    this.disableFinalizar = true;
  }

  checkHorarioFuncionamento() {
    this.timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(this.timeNow, this.settingsService.horarioFuncionamento);
    
    if (
      this.settingsService.horarioFuncionamento &&
      this.settingsService.horarioFuncionamento[0] <= this.timeNow &&
      this.settingsService.horarioFuncionamento[1] >= this.timeNow
    ) {
      this.disableChamar = false;
      this.foraDeTurno = false;
    } else {
      this.disableChamar = true;
      this.foraDeTurno = true;
    }
    return;
  }

}
