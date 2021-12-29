import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorRepository } from './author.repository';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorRepository) 
    private readonly authorRepository: AuthorRepository) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor = this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(newAuthor);
  }

  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: string): Promise<Author> {
    const autor = this.authorRepository.findOne(id);
    return autor;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const currentAuthor = await this.authorRepository.preload({
      id: id,
      ...updateAuthorDto,
    });
    if(!currentAuthor){
      throw new NotFoundException('Esse author não existe na nossa base de dados.');
    }
    return this.authorRepository.save(currentAuthor);
  }

  async remove(id: string): Promise<Author> {
    const currentAuthor = await this.authorRepository.findOne(id);
    return this.authorRepository.remove(currentAuthor);
  }
}
