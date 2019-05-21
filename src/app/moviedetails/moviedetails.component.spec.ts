import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Location} from "@angular/common";
import {fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './moviedetails.component';

const routes = [{
  path: 'movie/:id',
  component: MovieDetailsComponent
},
];

describe('MoviedetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule.withRoutes(routes)],
      declarations: [ MovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
