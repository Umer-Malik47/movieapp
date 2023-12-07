import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchTvsComponent } from './search-tvs/search-tvs.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {
    path: '',
    component:LandingpageComponent
  },
  {
    path : 'movie',
    component : MoviesComponent
  },
  {
    path: 'tv',
    component : TvComponent
  },
  {
    path: 'search-movie',
    component: SearchMoviesComponent
  },
  {
    path: 'search-tvs',
    component: SearchTvsComponent
  },
  {
    path: 'moviedetails/:id',
    component: MoviedetailsComponent
  },
  {
    path: 'tvdetails/:id',
    component: TvdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
