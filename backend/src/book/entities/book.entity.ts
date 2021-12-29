import { ApiProperty } from "@nestjs/swagger";
import { Author } from "src/author/entities/author.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'books'})
export class Book extends BaseEntity {
  constructor( book?: Partial<Book>) {
    super();
    this.id = book?.id;
    this.name = book?.name;
    this.author_uuid = book?.author_uuid;
    this.createdAt = book?.createdAt;
    this.updatedAt = book?.updatedAt;
  }

  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    name: 'id',
    type: String,
    description: 'Identificators of book'
  })
  id: string;

  @Column({name: 'nome', type: 'varchar', length: 255})
  @ApiProperty({
    name: 'name',
    type: String,
    description: 'Name of book'
  })
  name: string;

  @ManyToOne(type => Author, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({name: 'author_id', referencedColumnName: 'id'})
  @Column({name: 'author_uuid', type: 'varchar', length: 255})
  @ApiProperty({
    name: 'author_uuid',
    type: String,
    description: 'Author identificator'
  })
  author_uuid: string;

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
}
