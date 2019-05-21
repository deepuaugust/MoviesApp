import { TestBed, async } from '@angular/core/testing';
import {Location} from "@angular/common";
import {fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movielist/movielist.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { FilterPipe } from './searchfilter.pipe';
import { MovieDetailsComponent } from './moviedetails/moviedetails.component';

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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule,RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        MovieListComponent,
        MovieDetailsComponent,
        FilterPipe,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Home'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Home');
  }));
  it('should render MENU in <a> tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('MENU');
  }));
});
