import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') //movies라우터링 같음
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string): boolean {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return {
      updataeMovie: movieId,
      ...updateData,
    };
  }
}
