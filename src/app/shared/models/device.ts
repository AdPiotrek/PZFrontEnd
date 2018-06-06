/**
 * @description
 * Implementation of the device object
 * @param {string} deviceid? Opcjonalny id urządzenia
 * @param {string}  name? Optional device name
 * @param {string} macAddress? Optional Mac number of the device
 */
export interface Device {
  deviceid?: string;
  name?: string;
  macAdress?: string;
}
