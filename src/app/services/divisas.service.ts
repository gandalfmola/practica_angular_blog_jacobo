import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  httpClient = inject(HttpClient)

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any>("https://api.frankfurter.app/latest")
    )
  }



}
