import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UtilService {

  /**
   * @ignore
   */
  constructor() { }
  /**
   * @returns Returns error "This field is required"
   */
  public getRequiredErrorMessage(): string {
    return `To pole jest wymagane`;
  }

  /**
   * @example
   * An example of calling a method  getRegexpErrorMessage( DD-MM-YY )
   *
   * @param {string} format Enter the correct character string to the error
   * @returns Error with the wrong format and showing
   * Sample format:
   * Z przykładu zwroci Pole ma nieprawidłową wartość, wprowadzone dane muszą mieć format DD-MM-YY
   */

  public getRegexpErrorMessage(format: string): string {
    return `Pole ma nieprawidłową wartość, wprowadzone dane muszą mieć format ${format}`;
  }
}
