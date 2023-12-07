import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private service: MovieService) {
    this.service.getMoviecon().subscribe((res) => {
      this.movies = res
    });
  };

  filtermoviedata(val: string) {
    this.service.getMovieDetails(val).subscribe((result) => {
      this.movies = result;
    });

  };

  movies: any;

  isLoading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 400);
  }


}
