import { Injectable } from '@angular/core';

const imagePath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

export interface IMovieResult {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}

export interface IMovie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

const getFilmlerEndpoint = "https://api.themoviedb.org/3/discover/movie?api_key=6a454e3804f77f56ba69cf76130d8390&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const seachEndpoint = "https://api.themoviedb.org/3/search/movie?api_key=6a454e3804f77f56ba69cf76130d8390";

@Injectable()
export class FilmService {

  constructor() { }

  getPopulerFilmler(): Promise<IMovie[]> {
    return fetch(getFilmlerEndpoint)
      .then<IMovieResult>(res => res.json())
      .then(res => res.results)
      .then(res => res.map(item => {
        item.poster_path = imagePath + item.poster_path;
        return item;
      }));
  }

  findMovies(query: string): Promise<IMovie[]> {
    return fetch(seachEndpoint + "&query=" + query)
      .then<IMovieResult>(res => res.json())
      .then(res => (console.log(res), res))
      .then(res => res.results)
      .then(res => res.map(item => {
        item.poster_path = imagePath + item.poster_path;
        return item;
      }));
  }

  getById(id: string): Promise<IMovie> {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6a454e3804f77f56ba69cf76130d8390&language=en-US&external_source=imdb_id`)
      .then<IMovie>(res => res.json())
      .then(item => {
        item.poster_path = imagePath + item.poster_path;
        return item;
      });
  }
}
