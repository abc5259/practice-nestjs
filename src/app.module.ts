import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  //데코레이터라고 부른다 데코레이터는 클래스에 함수 기능을 추가할 수 있다.
  imports: [MoviesModule],
  controllers: [AppController], //url을 가져오고 함수를 실행시킨다. express라우터 같은것
  providers: [],
})
export class AppModule {} //모든것의 루트 모듈
