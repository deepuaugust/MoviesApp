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