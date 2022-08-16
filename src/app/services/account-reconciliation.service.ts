import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountReconciliationService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient:HttpClient
  ) { }
}
