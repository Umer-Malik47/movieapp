import { Component } from '@angular/core';
import { MovieService } from './service/movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieapp';
  imgurl: string = "https://image.tmdb.org/t/p/w300/";



  filtertvdata(val:any){
    this.service.getTvDetails(val).subscribe((result)=>{
      console.log(result)
    })
  }


  constructor(private service: MovieService) {

  }

}
