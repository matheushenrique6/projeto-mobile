import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public horarioFuncionamento: string[] = ["00:00", "23:59"];
  public guiche: number = 0;

  constructor() { }
}
