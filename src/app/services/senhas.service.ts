import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  constructor() {}

  public senhaGeral: number = 0;
  public senhaPrior: number = 0;
  public senhaExame: number = 0;
  public senhaTotal: number = 0;
  public inputNovaSenha: string = '';
  public senhasArray: { SG: string[]; SP: string[]; SE: string[] } = {
    SG: [],
    SP: [],
    SE: [],
  };

  public somaGeral(): void {
    this.senhaGeral++, this.senhaTotal++;
  }
  public somaPrior(): void {
    this.senhaPrior++, this.senhaTotal++;
  }
  public somaExame(): void {
    this.senhaExame++, this.senhaTotal++;
  }

  public novaSenha(tipoSenha: string = ''): void {
    const tipo = tipoSenha.toUpperCase();
    const data = new Date().toLocaleDateString('pt-BR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
    const hora = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const dataHora: string = `${data} - ${hora}`;

    switch (tipo) {
      case 'SG':
        this.somaGeral();
        this.inputNovaSenha = `${dataHora} - ${tipo} ${(
          this.senhasArray['SG'].length + 1
        )
          .toString()
          .padStart(2, '0')}`;
        this.senhasArray.SG.push(this.inputNovaSenha);
        break;

      case 'SP':
        this.somaPrior();
        this.inputNovaSenha = `${dataHora} - ${tipo} ${(
          this.senhasArray['SP'].length + 1
        )
          .toString()
          .padStart(2, '0')}`;
        this.senhasArray.SP.push(this.inputNovaSenha);
        break;

      case 'SE':
        this.somaExame();
        this.inputNovaSenha = `${dataHora} - ${tipo} ${(
          this.senhasArray['SE'].length + 1
        )
          .toString()
          .padStart(2, '0')}`;
        this.senhasArray.SE.push(this.inputNovaSenha);
        break;
    }
    console.log(this.senhasArray, this.inputNovaSenha);
  }
}
