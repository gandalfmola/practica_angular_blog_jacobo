import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  httpClient = inject(HttpClient)

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any>("https://restcountries.com/v3.1/all")
    )
  }


}
