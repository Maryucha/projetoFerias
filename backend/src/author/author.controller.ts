import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthorResponseSwagger } from 'src/api-doc/author-response.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

/**
 * This class represents the reuturn transaction object
 */
 @Controller('authors')
 @ApiTags('Author')
 export class AuthorController {
   constructor(private readonly authorsService: AuthorService) {}
 
   @Post()
   @ApiOperation({ summary: 'Criar um novo author'})
   @ApiCreatedResponse({
     status: 200,
     description: 'Author criado com sucesso.',
     type: AuthorResponseSwagger
   })
   @ApiBadRequestResponse({
     type: BadRequestSwagger,
     description: 'Parâmetros inválidos.',
   })
   create(@Body(ValidationPipe) createAuthorDto: CreateAuthorDto) {
     return this.authorsService.create(createAuthorDto);
   }
 
   @Get()
   @ApiOperation({ summary: 'Listagem de autores.'})
   @ApiResponse({
     status: 200,
     description: 'Autores listados com sucesso.',
     type: AuthorResponseSwagger,
     isArray: true
   })
   findAll() {
     return this.authorsService.findAll();
   }
 
   @Get(':id')
   @ApiOperation({ summary: 'Encontra um autor pelo id.'})
   @ApiResponse({
     status: 200,
     description: 'Autor encontrado com sucesso.',
     type: AuthorResponseSwagger,
     isArray: true
   })
   @ApiNotFoundResponse({
     type: NotFoundSwagger,
     description: 'Autor não foi encontrado.',
   })
   findOne(@Param('id') id: string) {
     return this.authorsService.findOne(id);
   }
 
   @Patch(':id')
   @ApiOperation({ summary: 'Editar autor.'})
   @ApiResponse({
     status: 200,
     description: 'Update realizado com sucesso.',
     type: AuthorResponseSwagger,
     isArray: true
   })
   @ApiOkResponse({
     type: AuthorResponseSwagger,
     description: 'Usuário atualizado com sucesso.',
   })
   @ApiNotFoundResponse({
     type: BadRequestSwagger,
     description: 'Dados inválidos.',
   })
   update(@Param('id') id: string, @Body(ValidationPipe) updateAuthorDto: UpdateAuthorDto) {
     return this.authorsService.update(id, updateAuthorDto);
   }
 
   @Delete(':id')
   @ApiOperation({ summary: 'Excluir autor da lista.'})
   @ApiResponse({
     status: 204,
     description: 'Autor deletado com sucesso.',
     type: AuthorResponseSwagger,
     isArray: true
   })
   @ApiResponse({
     status: 404,
     description: 'Usuário não foi encontrada',
     type: NotFoundSwagger,
   })
   remove(@Param('id') id: string) {
     return this.authorsService.remove(id);
   }
 }
 