import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '@prisma/client';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PruchaseApiService {
  getPurchases() {
    return this.http.get<Purchase[]>(environment.backendUrl + '/purchase/all');
  }

  constructor(private http: HttpClient) {}
}
