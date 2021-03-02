import { ITodo } from './todo.interface';
import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
    private logger = new Logger(TodoController.name);
    constructor(
        private readonly todoService: TodoService
    ) {
    }

    @Get()
    findAll() {
        this.logger.log('Handling Find All Request...')
        return this.todoService.findAll();
    }

    @Post()
    create(@Body() todo: ITodo) {
        this.logger.log('Handling Create Request...')
        this.todoService.create(todo);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        this.logger.log(`Find Todo with Id ${id}`);
        return this.todoService.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() todo: ITodo) {
        this.logger.log(`Update Todo with Id ${id}`);
        this.todoService.update(id, todo);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        this.logger.log(`Delete Todo with Id ${id}`);
        this.todoService.delete(id);
    }
}