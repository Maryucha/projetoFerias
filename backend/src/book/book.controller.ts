import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthorResponseSwagger } from 'src/api-doc/author-response.swagger';
import { BookResponseSwagger } from 'src/api-doc/book-response.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
@ApiTags('Book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo livro'})
  @ApiCreatedResponse({
    status: 200,
    description: 'Livro criado com sucesso.',
    type: BookResponseSwagger
  })
  @ApiBadRequestResponse({
    type: BadRequestSwagger,
    description: 'Parâmetros inválidos.',
  })
  create(@Body(ValidationPipe) createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listagem de livros.'})
  @ApiResponse({
    status: 200,
    description: 'Livros listados com sucesso.',
    type: BookResponseSwagger,
    isArray: true
  })
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Encontra um livro pelo id.'})
  @ApiResponse({
    status: 200,
    description: 'Livro encontrado com sucesso.',
    type: AuthorResponseSwagger,
    isArray: true
  })
  @ApiNotFoundResponse({
    type: NotFoundSwagger,
    description: 'Livro não foi encontrado.',
  })
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Editar livro.'})
  @ApiResponse({
    status: 200,
    description: 'Update realizado com sucesso.',
    type: BookResponseSwagger,
    isArray: true
  })
  @ApiOkResponse({
    type: BookResponseSwagger,
    description: 'Livro atualizado com sucesso.',
  })
  @ApiNotFoundResponse({
    type: BadRequestSwagger,
    description: 'Dados inválidos.',
  })
  update(@Param('id') id: string, @Body(ValidationPipe) updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir livro da lista.'})
  @ApiResponse({
    status: 204,
    description: 'Livro deletado com sucesso.',
    type: BookResponseSwagger,
    isArray: true
  })
  @ApiResponse({
    status: 404,
    description: 'Livro não foi encontrado',
    type: NotFoundSwagger,
  })
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
