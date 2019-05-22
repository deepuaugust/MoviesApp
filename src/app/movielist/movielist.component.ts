import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  GenreType
} from '../movie.model';
import {
  NgRedux,
  select
} from '@angular-redux/store';
import {
  MovieActions
} from '../action';
import {
  IAppState,
  IMovies
} from "../state";

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  moviedata: IMovies[];
  subscription;
  public genres = GenreType;
  public filtergenre;
  public fullarr;
  public genreval: string;
  constructor(private ngRedux: NgRedux < IAppState > , private actions: MovieActions) {
    this.subscription = this.ngRedux.select < IMovies[] > ('movies')
      .subscribe(movies => this.moviedata = movies);
  }

  ngOnInit() {
    this.genreval = "Filter by genre";
    var keys = [];
    for (var key in this.genres) keys.push(key);
    this.filtergenre = keys;
    this.ngRedux.dispatch(this.actions.fetchList());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.moviedata = [];
  }

  filterGenre(val) {
    val = val.toLowerCase();
    this.moviedata = this.moviedata.filter(res => {
      return res.genres.includes(val);
    });
  }

  clearFilter() {
    this.subscription = this.ngRedux.select < IMovies[] > ('movies')
      .subscribe(movies => this.moviedata = movies);
    this.genreval = "Filter by genre";
  }
}
