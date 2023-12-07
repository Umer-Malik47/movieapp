import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsserviceService } from '../detailsservice/detailsservice.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {
  
  constructor(private service:DetailsserviceService,private router :ActivatedRoute) {
    
  }
  id:any;
  ngOnInit(): void {
  let getpram = this.router.snapshot.paramMap.get('id');
  this.id = getpram
  this.getmoviesdetails();

  setTimeout(() => {
    this.isLoading = false;
  }, 400);
  }

  getmoviesdetails(){
    this.service.getmoviesdetails(this.id).subscribe((result)=>{
   console.log(result)
   this.moviedetailsresult = result
    })
  }

  moviedetailsresult:any;

  isLoading: boolean = true;

}
