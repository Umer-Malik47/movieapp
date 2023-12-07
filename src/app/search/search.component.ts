import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // searchquery:any
  // searchitems:any;

  // constructor(private service : MovieService) {
  //   this.service.getSearchitems(this.searchquery).subscribe((result)=>{
  //     console.log(result)
  //   })
  // }
}
