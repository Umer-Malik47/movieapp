import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsserviceService } from '../detailsservice/detailsservice.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent {
  constructor(private service:DetailsserviceService,private router :ActivatedRoute) {
    
  }
  id:any;
  ngOnInit(): void {
  let getpram = this.router.snapshot.paramMap.get('id');
  this.id = getpram
  this.gettvsdetails();

  setTimeout(() => {
    this.isLoading = false;
  }, 400);
  }

  gettvsdetails(){
    this.service.gettvsdetails(this.id).subscribe((result)=>{
   console.log(result)
   this.tvsdetailsresult = result
    })
  }

  tvsdetailsresult:any;

  isLoading: boolean = true;

}
