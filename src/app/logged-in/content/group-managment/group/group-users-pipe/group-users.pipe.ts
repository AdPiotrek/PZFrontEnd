import { Pipe, PipeTransform } from '@angular/core';
import {Device} from '../../../../../shared/models/device';

@Pipe({
  name: 'groupUsers'
})
export class GroupUsersPipe implements PipeTransform {

  transform(users: Array<Device>, group: string): Array<Device> {
    return users;
  }

}
