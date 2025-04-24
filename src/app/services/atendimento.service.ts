import { Injectable } from '@angular/core';
import { SenhasService } from './senhas.service';

@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {
  public painelChamadas: string[] = [];
  private senhaAnterior: string | null = null;

  constructor(private senhasService: SenhasService) {}

  chamarProximaSenha(): string | null {
    const proximaSenha = this.selecionarProximaSenha();

    if (proximaSenha) {
      this.adicionarAoPainel(proximaSenha);
      this.senhaAnterior = proximaSenha;
      return proximaSenha;
    }

    return null;
  }

  private selecionarProximaSenha(): string | null {
    const { SP, SE, SG } = this.senhasService.senhasArray;

    if (!this.senhaAnterior || !this.senhaAnterior.includes('SP')) {
      if (SP.length > 0) return SP.shift() || null;
    }

    if (SE.length > 0) return SE.shift() || null;
    if (SG.length > 0) return SG.shift() || null;

    return null;
  }

  private adicionarAoPainel(senha: string): void {
    this.painelChamadas.unshift(senha);
    if (this.painelChamadas.length > 5) {
      this.painelChamadas.pop();
    }
  }

  finalizarAtendimento(): void {
    console.log(`Atendimento finalizado para: ${this.senhaAnterior}`);
    // Aqui você pode registrar horário de término, guichê etc.
    this.senhaAnterior = null;
  }
}
