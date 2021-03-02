import { TodoModule } from './todo/todo.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
