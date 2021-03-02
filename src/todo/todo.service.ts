import { ITodo } from './todo.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
    private storage: ITodo[] = [{ 'id': 1, 'label': 'Melissa', 'complete': true}];

    findAll() {
        return this.storage;
    }

    create(todo: ITodo) {
        const currentMaxId = Math.max(...this.storage.map((t: ITodo) => t.id));
        todo.id = currentMaxId > 0 ? currentMaxId + 1 : 1;
        this.storage.push(todo);
    }

    findOne(id: number) {
        return this.storage.find((todo: ITodo) => todo.id === id);
    }

    update(id: number, todo: ITodo) {
        const index = this.storage.findIndex((todo: ITodo) => todo.id === id);
        this.storage[index] = todo;
    }

    delete(id: number) {
        this.storage = this.storage.filter((todo: ITodo) => todo.id !== id);
    }
}