import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '@prisma/client';

@Injectable({
  providedIn: 'root'
})
export class PruchaseApiService {

  getPurchases() {
    return this.http.get<Purchase[]>('api/purchase/all');
  }

  constructor(
    private http: HttpClient,
  ) { }
}
