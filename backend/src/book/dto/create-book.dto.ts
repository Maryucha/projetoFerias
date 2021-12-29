import { IsString, IsNotEmpty } from "class-validator";

export class CreateBookDto {

  @IsString({
    message: 'Informe o primeiro nome do livro.'
  })
  @IsNotEmpty({
    message:'Você deve informar o nome do livro.'
  })
  name: string;

  @IsString({
    message: 'Informe o primeiro uuid do autor.'
  })
  @IsNotEmpty({
    message:'Você deve informar o uuid do autor.'
  })
  author_uuid: string;
}