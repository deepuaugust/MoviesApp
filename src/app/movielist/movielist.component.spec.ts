import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Location} from "@angular/common";
import {fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { MovieListComponent } from './movielist.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../searchfilter.pipe';
import { HttpClientModule } from '@angular/common/http';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import { MovieActions } from '../action';

const routes = [{
  path: 'home',
  component: MovieListComponent
},
];

describe('MovielistComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule,RouterTestingModule.withRoutes(routes), NgReduxTestingModule],
      declarations: [ MovieListComponent, FilterPipe ],
      providers:[MockNgRedux, MovieActions],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(MovieListComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
