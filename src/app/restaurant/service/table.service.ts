import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Table} from '../model/table.entity';

@Injectable({
  providedIn: 'root'
})
export class TableService extends BaseService<Table>{

  constructor() {
    super();
    this.resourceEndpoint = '/tables';
  }
}
