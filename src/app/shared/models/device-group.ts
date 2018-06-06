import { Device } from './device';

/**
 * @param {string} idDeviceFamilies The number identifying the device in the group
 * @param {string} familyName The name of the group
 * @param {Array} devices? Optional device
 */
export interface DeviceGroup {
  idDeviceFamilies: string;
  familyName: string;
  devices?: Array<Device>;
}
