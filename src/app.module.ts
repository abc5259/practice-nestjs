import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  //데코레이터라고 부른다 데코레이터는 클래스에 함수 기능을 추가할 수 있다.
  imports: [],
  controllers: [MoviesController], //url을 가져오고 함수를 실행시킨다. express라우터 같은것
  providers: [MoviesService],
})
export class AppModule {} //모든것의 루트 모듈
