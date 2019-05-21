import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  MovieService
} from '../movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public id: number;
  errorMessage: string;
  public moviedetail= { genres:'' };
  constructor(private route: ActivatedRoute, private movie: MovieService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getMovie(this.id);
  }

  getMovie(id: number) {
    this.movie.getMovie(id).subscribe(
      data => this.moviedetail = data,
      error => this.errorMessage = <any>error);
  }

}