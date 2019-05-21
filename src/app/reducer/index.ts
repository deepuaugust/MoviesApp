import {
  AnyAction
} from 'redux';
import {
  MovieActions
} from '../action';

export interface IAppState {
  movies: IMovies[];
}
export interface IMovies {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: Array < any > ;
  rate: string;
  length: string;
  img: string;
}
export const INITIAL_STATE: IAppState = {
  movies: []
};

export function rootReducer(lastState: IAppState, action: AnyAction): IAppState {
  switch (action.type) {
      case MovieActions.FETCH_LIST_SUCCESS:
      return {movies: [...action.movies, ...lastState.movies]}
  }
  return lastState;
}