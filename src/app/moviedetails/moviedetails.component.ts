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
  public moviedetail;
  constructor(private route: ActivatedRoute, private movie: MovieService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.movie.getJSON().subscribe(data => {
      this.moviedetail = data.filter(x => {
        return x.id == this.id;
      });
    });
  }

}