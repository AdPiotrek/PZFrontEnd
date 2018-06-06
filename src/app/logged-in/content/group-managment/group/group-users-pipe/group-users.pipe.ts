import { Pipe, PipeTransform } from '@angular/core';
import { Device } from '../../../../../shared/models/device';

@Pipe({
  name: 'groupUsers'
})
export class GroupUsersPipe implements PipeTransform {

  /**
   * @description
   * Returns users
   * @param users Users
   * @param group Groups
   */
  transform(users: Array<Device>, group: string): Array<Device> {
    return users;
  }

}
