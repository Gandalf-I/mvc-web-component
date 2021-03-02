import { Controller, Get, Render } from '@nestjs/common';

@Controller('test')
export class AppController {
  @Get()
  @Render('index')
  test() {
    return {};
  }

  @Get('*')
  @Render('index')
  testAll() {
    return {};
  }
}
