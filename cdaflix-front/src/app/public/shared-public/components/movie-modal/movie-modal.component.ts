import { Component, Input, OnInit, Signal, TemplateRef, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { tmdbUtil } from '../../../../utils/tmdb-util';
import { TmdbMovieDetails } from '../../../../models/TmdbMovieDetails';
import { MovieProvider } from '../../../../models/MovieProvider';


@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-view.component.scss'
})
export class MovieModalComponent implements OnInit {

  private movieService = inject(TmdbService);
  private route = inject(ActivatedRoute);

  @Input()
  movie: TmdbMovieDetails | null = this.movieService.movieDetails$()

  movieProviders = this.movieService.movieProviders$
  imageBaseurl = tmdbUtil.imageBaseUrl

  ngOnInit() {
    const id = this.movie?.id
    if(id != null) {
      this.movieService.getMovieProviders(id);
    } 
  }



}