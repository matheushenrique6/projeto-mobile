# Projeto Sistema de Controle de Atendimento

## Descrição do Projeto

Este projeto consiste no desenvolvimento de um sistema de controle de atendimento em filas para laboratórios médicos. O sistema gerencia o fluxo de pacientes através da emissão de senhas, gestão de filas com priorização, chamada de pacientes para guichês, e registro de atendimentos.

## Contribuição
Este projeto foi desenvolvido em colaboração pelos seguintes alunos:

- <img src="https://github.com/matheushenrique6.png" alt="Matheus da Silva" width="32" height="32"> [Matheus Henrique](https://github.com/matheushenrique6)
- <img src="https://github.com/wagnerfgomes.png" alt="Wagner Felipe" width="32" height="32"> [Wagner Felipe](https://github.com/wagnerfgomes)

## Funcionalidades

### 1. Emissão de Senhas

- Permite que o Agente Cliente (AC) emita senhas através de um totem.
- O Agente Sistema (AS) também pode emitir senhas.
- Tipos de senhas:
  - **Senha Prioritária (SP)**
  - **Senha Geral (SG)**
  - **Senha para retirada de Exames (SE)**

### 2. Gestão de Filas

- Gerencia filas de atendimento com base na priorização das senhas.

### 3. Priorização de Atendimento

- Implementa a seguinte lógica de priorização:
  - Senhas SP têm a maior prioridade.
  - Senhas SE são atendidas após uma senha SP.
  - Senhas SG têm a menor prioridade.
- Ordem de chamada: `[SP] -> [SE|SG] -> [SP] -> [SE|SG]`.

### 4. Chamada de Senhas

- O Agente Atendente (AA) pode chamar o próximo cliente na fila.
- A senha chamada e o guichê correspondente são exibidos em um painel.

### 5. Registro de Atendimento

- Registra o atendimento realizado no guichê pelo Agente Atendente (AA).

### 6. Controle de Expediente

- Início do expediente: **7 horas da manhã**.
- Final do expediente: **17 horas**.

### 7. Exibição das Últimas Senhas Chamadas

- O painel exibe as últimas 5 senhas chamadas.
- A próxima senha a ser chamada não é exibida previamente.

### 8. Flexibilidade dos Guichês

- Qualquer guichê pode atender qualquer tipo de senha.

### 9. Descarte de Senhas Não Atendidas

- Aproximadamente 5% das senhas emitidas são descartadas por não serem atendidas.

### 10. Numeração de Senhas

- Formato: `YYMMDD-PPSQ`.

### 11. Geração de Relatórios
- Relatórios diários e mensais contendo:
  - Quantitativo geral das senhas emitidas.
  - Quantitativo geral das senhas atendidas.
  - Quantitativo das senhas emitidas, por prioridade.
  - Quantitativo das senhas atendidas, por prioridade.

## Tecnologias Utilizadas

- **Ionic Framework**: Para o desenvolvimento da interface móvel.
- **Angular**: Para a lógica de negócios e gerenciamento de estado.
- **Capacitor**: Para integração com funcionalidades nativas.

## Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   ionic serve
   ```
3. Acesse a aplicação no navegador em `http://localhost:8100`.

## Estrutura do Projeto

- **src/app**: Contém os componentes, serviços e páginas da aplicação.
- **src/assets**: Contém os arquivos estáticos, como ícones e sons.
- **src/environments**: Configurações de ambiente (desenvolvimento e produção).
- **android**: Configurações e arquivos para a plataforma Android.

## Licença

Este projeto está licenciado sob a licença [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/) license.
