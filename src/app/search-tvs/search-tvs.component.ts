import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search-tvs',
  templateUrl: './search-tvs.component.html',
  styleUrls: ['./search-tvs.component.css']
})
export class SearchTvsComponent {
  constructor(private service :MovieService) {
    
  }
  searchquery(val:any){
  this.service.getSearchtvs(val).subscribe((result)=>{
    console.log(result)
    this.tvs = result
  })
  }

  tvs:any;

  isLoading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 400);
  }
}
