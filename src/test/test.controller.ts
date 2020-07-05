import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TestService } from './test.service';

// @ApiBearerAuth()
@ApiTags('test')
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Works string',
  })
  getHello(): string {
    return 'Test works';
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
  @ApiResponse({
    status: 404,
    description: 'Record not found',
    type: BadRequestException,
  })
  findOne(@Param('id') id: string): {id: number} {
    const convertedId = Number(id);
    if (!convertedId) {
      throw new BadRequestException('Invalid test');
    }
    return {id: convertedId};
  }
}
