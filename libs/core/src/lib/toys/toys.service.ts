import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';

import { CreateToyInput } from './dto/create-toy.input'
import { UpdateToyInput } from './dto/update-toy.input'


@Injectable()
export class ToysService {
  private toys = JSON.parse(readFileSync(__dirname + '/assets/toys-data.json', 'utf8'));
  constructor() {
    this.toys = JSON.parse(readFileSync(__dirname + '/assets/toys-data.json', 'utf8'));
  }

  async create(createToyInput: CreateToyInput) {
    const toyId = this.toys.length + 1;
    const newToy = {
      ...createToyInput,
      id: toyId
    }
    this.toys.push(newToy);
    writeFileSync(__dirname + '/assets/toys-data.json', JSON.stringify(this.toys));
    console.log(this.toys);
    console.log("[Toy Service]: New Toy Created: ", newToy);
    return newToy;
  }

  findAll() {
    return this.toys;
  }

  async findAllPublished(published: boolean) {
    console.log(this.toys);
    console.log(this.toys.filter((toy) => {return toy.published == published}));
    return this.toys.filter((toy) => {return toy.published == published});
  }

  async findByAuthor(author: number) {
    return this.toys.filter((toy) => {return toy.author == author});
  }

  findOne(id: number) {
    let toy = this.toys.find((toy) => toy.id === id);
    if(!toy)
      throw new Error("Toy Not Found");
    return toy;  
  }

  update(id: number, updateToyInput: UpdateToyInput) {
    return `This action updates a #${id} toy`
  }

  async remove(id: number) {
    console.log("cannot remove");
    let deletedToy = this.findOne(id);
    console.log(deletedToy);
    this.toys = this.toys.filter((toy) => {return !(toy.id === id)});
    return deletedToy;
  }
}
