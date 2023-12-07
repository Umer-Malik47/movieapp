import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  constructor(private service: MovieService) {
  this.service.getTvcon().subscribe((res)=>{
    this.tvs = res
  })
  }


  filtertvdata(val:any){
    this.service.getTvDetails(val).subscribe((result)=>{
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
