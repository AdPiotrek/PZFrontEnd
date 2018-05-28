import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UtilService {

  constructor() { }

  public getRequiredErrorMessage(): string {
    return `To pole jest wymagane`;
  }

  public getRegexpErrorMessage(format: string): string {
    return `Pole ma nieprawidłową wartość, wprowadzone dane muszą mieć format ${format}`;
  }
}
