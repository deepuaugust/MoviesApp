import {
  Injectable
} from '@angular/core';
import {
  AnyAction
} from 'redux';
import {
  ajax
} from 'rxjs/ajax';
import {
  map
} from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';


const fetchListFulfilled = payload => ({
  type: MovieActions.FETCH_LIST_SUCCESS,
  movies: payload
});

export const epic = (action$) =>
  action$.pipe(ofType(MovieActions.FETCH_LIST),
    mergeMap(action => 
      ajax.getJSON('./assets/movie.mock-data.json') // Our API
        .pipe(map(response => fetchListFulfilled(response)))
    ))

@Injectable()
export class MovieActions {
  static GET_MOVIES = 'GET_MOVIES';
  static FETCH_LIST = 'FETCH_LIST';
  static FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';

  fetchList() {
    return {
      type: MovieActions.FETCH_LIST
    };
  }

  getMovies(name: string, description: string): AnyAction {
    return {
      type: MovieActions.GET_MOVIES,
      name,
      description
    };
  }
}