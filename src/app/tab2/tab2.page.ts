import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Esse importa os <ion-*>
import { AtendimentoService } from '../services/atendimento.service'; // ajuste o caminho se necessário

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  private audio = new Audio('/assets/sinal.mp3');
  public disebleChamar = false;
  public disebleFinalizar = true;

  constructor(public atendimentoService: AtendimentoService) {}

  get senhaAtual(): string | null {
    return this.atendimentoService['senhaAnterior'];
  }

  chamarSenha() {
    this.atendimentoService.chamarProximaSenha();
    this.audio.currentTime = 0;
    if (this.senhaAtual !== null) {
      if (this.disebleFinalizar) {
        this.disebleFinalizar = false;
      }
      this.disebleChamar = true;
    }
    // this.audio.play(); descomentar para tocar o áudio
  }

  finalizarSenha() {
    this.atendimentoService.finalizarAtendimento();
    if (this.disebleChamar) {
      this.disebleChamar = false;
    }
    this.disebleFinalizar = true;
  }

}
