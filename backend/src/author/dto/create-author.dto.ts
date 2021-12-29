import { IsString, IsNotEmpty, IsArray, IsOptional, IsEmail } from "class-validator";
import { Book } from "src/book/entities/book.entity";

/**
 * This class represents the author object for creation;
 * These decorators serve to guarantee the validation of the types and integrity of the objects that will go to the database 
 */
 export class CreateAuthorDto {

  @IsString({
    message: 'Informe o primeiro nome do autor.'
  })
  @IsNotEmpty({
    message: 'Você deve informar o nome do author.'
  })
  firstName: string;

  @IsString({
    message: 'Informe o sobrenome do autor.'
  })
  @IsNotEmpty({
    message: 'Você deve informar o sobrenome do autor.'
  })
  lastName: string;

  @IsArray({
    message: 'Vodê deve informar o livro.'
  })
  @IsOptional()
  book: Book[];

  @IsEmail({
    message: 'Informe um email válido para o autor.'
  })
  @IsNotEmpty({
    message: 'Você deve informar o email do autor.'
  })
  email: string;
}
