import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movielist/movielist.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './moviedetails/moviedetails.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './searchfilter.pipe';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from './reducer';
import { MovieActions, epic } from './action';
import { createEpicMiddleware } from 'redux-observable';

const routes = [{
  path: 'home',
  component: MovieListComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'movie/:id',
  component: MovieDetailsComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    FilterPipe,
  ],
  imports: [
    NgReduxModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'}),
  ],
  providers: [MovieService, MovieActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createEpicMiddleware(epic)]
      );
  }
}
