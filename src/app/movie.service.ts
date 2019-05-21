import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import {
  Observable,
} from 'rxjs';
import 'rxjs/add/operator/map';
import {
  IMovies
} from './state';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getJSON(): Observable < any > {
    return this.http.get("./assets/movie.mock-data.json");
  }

  getMovie(id: number): Observable < any > {
    return this.getJSON()
      .map((products: IMovies[]) => products.find(p => p.id == id));
  }
}