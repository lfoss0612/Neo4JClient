import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExtHttp } from '../shared/extHttp.service';
import { Search } from './Search';

@Injectable()
export class SearchService {

  constructor(private http: ExtHttp) {}
  
}
