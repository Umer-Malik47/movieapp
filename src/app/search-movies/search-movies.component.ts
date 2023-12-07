import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {

  constructor(private service :MovieService ) {
    
  }
  searchquery(val:any){
  this.service.getSearchmovies(val).subscribe((result)=>{
    console.log(result)
    this.movies = result;
  })

  }

  movies:any;

  isLoading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 400);
  }
  
}
