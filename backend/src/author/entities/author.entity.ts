import { ApiProperty } from "@nestjs/swagger";
import { Book } from "src/book/entities/book.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity({name: 'authors'})
@Unique(['email'])
export class Author extends BaseEntity {

    constructor(author?: Partial<Author>) {
      super();

      this.id = author?.id;
      this.email = author?.email;
      this.firstName = author?.firstName;
      this.lastName = author?.lastName;
      this.createdAt = author?.createdAt;
      this.updatedAt = author?.updatedAt;
    }

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
      name: 'id',
      type: String,
      description: 'Identificators of author'
    })
    id: string;

    @Column({name: 'nome', type: 'varchar', length: 255})
    @ApiProperty({
      name: 'name',
      type: String,
      description: 'Name of author'
    })
    firstName: string;

    @Column({name: 'sobrenome', type: 'varchar', length: 255})
    @ApiProperty({
      name: 'name',
      type: String,
      description: 'Lastname of author'
    })
    lastName: string;

    @Column({name:'email', type:'varchar', length: 250})
    @ApiProperty({
      name:'email',
      type: String,
      description: 'e-mail this author'
    })
    email: string;
  
    @CreateDateColumn({name: 'created_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    @ApiProperty({
      name:'Date creation',
      type: Date,
      description:'timestamp of creation'
    })
    createdAt: Date;
  
    @UpdateDateColumn({name: 'update_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    @ApiProperty({
      name:'Date update',
      type: Date,
      description:'timestamp of update'
    })
    updatedAt: Date;

    @OneToMany(type => Book, books => books.name, {
      cascade: true
    })
    book: Book[];
}
