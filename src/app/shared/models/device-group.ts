import {Device} from './device';

export interface DeviceGroup {
  idDeviceFamilies: string;
  familyName: string;
  devices?: Array<Device>;
}
