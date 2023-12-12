import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from '../../movie/list-cards/list-cards.component';
import { SearchBarComponent } from '../../movie/search-bar/search-bar.component';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
import { ModalComponent } from '../../movie/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movies-views',
  standalone: true,
  imports: [
    CommonModule,
    ListCardsComponent,
    SearchBarComponent,
    ModalComponent
  ],
  templateUrl: './movies-view.component.html',
  styleUrl: './movies-view.component.scss'
})
export class MoviesViewComponent implements OnInit {

  @Input()
  movies!: Array<Movie>

  @Input()
  movie!: Movie

  @Input()
  args!: string

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAll().subscribe({
      next: (r) => {
        this.movies = r
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  handleMovies(movies: Array<Movie>) {
    this.movies = movies
  }

}
