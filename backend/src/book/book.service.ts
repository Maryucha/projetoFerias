import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
  ) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(newBook);
  }

  findAll() {
    return this.bookRepository.find();
  };
  

  findOne(id: string): Promise<Book> {
    return this.bookRepository.findOne(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const currentBook = await this.bookRepository.preload({
      id: id,
      ...updateBookDto
    });
    if(!currentBook){
      throw new NotFoundException('Esse livro não existe na nossa base de dados.');
    }
    return this.bookRepository.save(currentBook);
  }

  async remove(id: string): Promise<Book> {
    const currentBook = await this.bookRepository.findOne(id);
    return this.bookRepository.remove(currentBook);
  }
}
