import { ApiProperty } from "@nestjs/swagger";
import { Book } from "src/book/entities/book.entity";

export class AuthorResponseSwagger {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  book: Book[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}