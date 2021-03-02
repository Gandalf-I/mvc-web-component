import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('test')
  @Render('test')
  test1() {
    return {};
  }

  @Get('test/*')
  @Render('test')
  test2() {
    return {};
  }

  @Get('')
  @Render('other')
  otherRoute() {
    return {};
  }
}
