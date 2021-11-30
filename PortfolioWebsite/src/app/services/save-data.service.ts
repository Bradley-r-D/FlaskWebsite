import { Injectable } from '@angular/core';
import { Visitor } from '../models/visitor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SaveDataService {
  constructor(private http: HttpClient) {}

  private storagePath = 'assets/storage.json';
  newData: any;

  //open 'src/app/storage.json' file and get the data
  getData(): Observable<any> {
    this.http.get(this.storagePath).subscribe((data) => {
      this.newData = data;
    });
    return this.newData;
  }
  storeData(visitor: Visitor): Observable<any> {
    console.log('We are here and this is the payload: ', visitor);
    return this.http.post(this.storagePath, visitor);
  }
}
