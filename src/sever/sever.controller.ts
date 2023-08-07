import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { SeverService } from './sever.service';
import { sever } from 'src/schemas/sever.schema';

@Controller('sever')
export class SeverController {
  constructor(private readonly severService: SeverService) {}

  @Post('/post')
  create(@Body() createSeverDto: sever) {
    return this.severService.create(createSeverDto);
  }

  @Get()
  findAll() {
    return this.severService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.severService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateSeverDto: sever) {
    return this.severService.update(id, updateSeverDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.severService.remove(id);
  }
}
